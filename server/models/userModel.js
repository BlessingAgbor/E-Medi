const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  fullName: { type: String },
  pharmacy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pharmacy",
    },
  ],
  avatarID: { type: String },
  email: { type: String },
  password: { type: String },
  avatar: { type: String },
});

module.exports = mongoose.model = ("user", userModel);
