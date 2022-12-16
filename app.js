const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
require("dotenv/config")


// connect to database

mongoose.connect(process.env.DB_URL, () => console.log("Connected to MongoDB!"))

// Import Routes

const reviewsRoute = require('./routes/reviews');

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/reviews', reviewsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send("Hello World!")
})


// listening at ...
app.listen(3000)

