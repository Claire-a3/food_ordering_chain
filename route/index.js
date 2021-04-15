const express = require('express');
const router = express.Router();

const Meal =require('../model/menu')
const Order = require('../model/order')

  //Creating menu
router.post('/create', async (req, res) => {
  const menu = new Meal(req.body);
  console.log(menu)
  
  try {
  await menu.save();
  res.status(200).send({ status: "201", message: "OK", data: menu });
  } catch (error) {
  res.status(500).send(error);
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
  console.log(order)
  
  try {
  await order.save();
  res.status(200).send({ status: "201", message: "OK", data: order });
  } catch (error) {
  res.status(500).send(error);
  }
  
  });
  //get order
  router.get('/listOrder',async (req, res) => {
  const order = await Order.find({});
  res.send(order)
  })
  

module.exports = router;