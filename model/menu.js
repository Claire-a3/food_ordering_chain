const mongoose = require('mongoose')


const MealSchema = mongoose. Schema({
  title: String,
  price: Number
});

// Compile model from schema
module.exports = mongoose.model('Meal', MealSchema);