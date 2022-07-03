const mongoose = require("mongoose");

const contactModel = mongoose.Schema({
  email: { type: String },
  pharmacy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pharmacy",
    },
  ],
  linkedIn: { type: String },
  facebook: { type: String },
  whatsApp: { type: String },
  website: {
    type: String
  },
  aboutMe: { type: String },
});

module.exports = mongoose.model = ("contact", contactModel);
