const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  name: String,
  linkedProduct: {
    _id: String,
    name: String,
  },
  color: {
    primary: String,
    secondary: String,
  },
  image: {
    id: String,
    title: String,
    url: String,
    deleteUrl: String,
    thumb: String,
  },
});
module.exports = mongoose.model("banner", bannerSchema);
