const mongoose = require("mongoose");
const formModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  inputs: [
    {
      fieldType: { type: String, required: true },
      name: { type: String, required: true },
      answers: [{ type: String, required: true, default: "" }],
    },
  ],
});

module.exports = mongoose.model("Form", formModel);
