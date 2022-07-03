const mongoose = require("mongoose")

const pharmModel = mongoose.Schema({
  name: { type: String },
  location: { type: String },
  branches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "branch",
    },
  ],
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  licenceNo: { type: String },
  email: { type: String },
  avatarID: { type: String },
  avatar: { type: String },
  password: { type: String },
  headOffice: { type: Boolean },
});

mongoose.model=("pharmacy", pharmModel)