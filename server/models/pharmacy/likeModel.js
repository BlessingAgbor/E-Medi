const mongoose = require("mongoose");

const likeModel = mongoose.Schema({
  user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref:"user"
 },
 product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },

});

module.exports= mongoose.model = ("like", likeModel);
