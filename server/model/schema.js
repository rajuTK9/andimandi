const mongoose = require("mongoose");

const dataScheme = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model("DATA", dataScheme);

module.exports = Data;
