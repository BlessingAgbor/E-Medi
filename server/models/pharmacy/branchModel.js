const mongoose = require("mongoose");

const branchModel = mongoose.Schema({
  pharmacy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pharmacy",
    },
  ],
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  NafdacNO: { type: String },
  avatarID: { type: String },
  avatar: { type: String },
  like: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "like",
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contact",
  },

  description: { type: String },
});

mongoose.model = ("branch", branchModel);
