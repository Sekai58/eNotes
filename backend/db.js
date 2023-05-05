const mongoose = require("mongoose");
const express = require("express");

const mongoDB_URI = "mongodb://127.0.0.1:27017/";

const mongoDBConnect = () => {
  mongoose.connect(mongoDB_URI);
  console.log("connected to mondodb");
};

module.exports = mongoDBConnect;
