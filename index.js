const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

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
