const mongoose = require("mongoose");
const formModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  inputs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Input",
    },
  ],
});

module.exports = mongoose.model("Form", formModel);
