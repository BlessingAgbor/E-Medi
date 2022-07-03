const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  name: { type: String },
  pharmacy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pharmacy",
    },
  ],
  NafdacNO: { type: String },
  avatarID: { type: String },
  avatar: { type: String },
  like: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "like",
  },
  rating: { 
      type: mongoose.Schema.Types.ObjectId,
      ref:'rating'
    },

  description: { type: String },
});

module.exports = mongoose.model = ("product", productModel);
