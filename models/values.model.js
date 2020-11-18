const mongoose = require('mongoose')
const ValuesSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  values: [
    {
      fieldId: { type: mongoose.Schema.Types.ObjectId, required: true },
      value: { type: String },
    },
  ],
})

module.exports = mongoose.model('Value', ValuesSchema)
