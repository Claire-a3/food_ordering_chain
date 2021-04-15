const express = require('express');
const router = express.Router();

const Meal =require('../model/menu')
const Order = require('../model/order')

require('dotenv').config()

const credentials = {
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME,
};

const Africastalking = require("africastalking")(credentials);

const sendSms = Africastalking.SMS;
  //Creating menu
router.post('/create', async (req, res) => {
  const menu = new Meal(req.body);
  
  try {
  await menu.save();
  res.status(200).send({ status: status, message: "OK", data: menu });
  } catch (error) {
  res.send(error);
  }
  
  });
  //Gettin menu list
router.get('/list', async(req, res) => {
  const meal = await Meal.find({});
  res.send(meal)
  })
  //create order
router.post('/createOrder', async(req, res) => {
  const order = new Order(req.body);
  
  try {
  await order.save();
  sendSms
      .send({
    to: req.body.userPhoneNumber,
    message: `We're glad you ordered from us.
     You will receive your order in a few minutes,be patient.`,
  })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  res.status(200).send({ status: status, message: "OK", data: order });
  } catch (error) {
  res.send(error);
  }
  
  });
  //get order
  router.get('/listOrder',async (req, res) => {
  const order = await Order.find({});
  res.send(order)
  })
  

module.exports = router;