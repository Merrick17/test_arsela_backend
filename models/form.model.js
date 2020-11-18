const mongoose = require('mongoose')
const formModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  inputs: [
    {
      fieldType: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
})

module.exports = mongoose.model('Form', formModel)
