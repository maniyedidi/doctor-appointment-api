const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())
app.use("/api",routes);
app.listen(process.env.PORT || 3000, () => {
  console.log("connected");
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });
