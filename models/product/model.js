const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  lastPrice: Number,
  categories: [String],
  visits: Number,
  likes: Number,
  cover: String,
  spent: Boolean,
  comingSoon: Boolean,
  images: [
    {
      id: String,
      title: String,
      url: String,
      deleteUrl: String,
      thumb: String,
    },
  ],
});

module.exports = mongoose.model("Project", productSchema);
