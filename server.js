
const express = require('express')
const menu = require('./route/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 3001

// Connect MongoDB
mongoose.connect('mongodb+srv://Claire:Cl@ire96!@cluster0.gr7kt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true  }, () => {
	console.log("Connected to DB")
});

// ...
app.use(bodyParser.json())
app.use('/menu', menu);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

