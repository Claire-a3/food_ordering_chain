const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  menuItemId: Number,
  userPhoneNumber: String
});

// Compile model from schema
const orderModel = mongoose.model('orderModel', orderSchema );
module.exports = orderModel;