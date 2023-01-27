const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  avatar: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("product", productSchema);
