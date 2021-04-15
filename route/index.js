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

module.exports = router;