const mongoose = require("mongoose");

const InputSchema = mongoose.model({
  name: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("Input", InputSchema);
