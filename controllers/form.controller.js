const Form = require('../models/form.model')

module.exports.addForm = async (req, res) => {
  let title = req.body.title
  let desc = req.body.desc
  let fields = req.body.fields

  try {
    let newForm = new Form({
      title: title,
      description: desc,
      inputs: fields,
    })
    let result = await newForm.save()
    res.status(200).json({ msg: 'Form Added' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Something went wrong..' })
  }
}

module.exports.getAllForms = async (req, res) => {
  try {
    let result = await Form.find()
    res.status(200).json({ msg: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Something went wrong..' })
  }
}

module.exports.addAnswers = async (req, res) => {
  let formid = req.params.id
  fieldValues = req.body.values
  let existForm = await Form.findById(formid)
  let existInputs = existForm.inputs
  try {
    fieldValues.forEach((answ) => {
      console.log('Answer', answ)
      let elment = existInputs.findIndex((elm) => elm._id == answ.fieldId)
      //console.log('elm', elm._id)
      existInputs[elment].answers.push(answ.value)
      //console.log('new Values', existInputs)
    })
    let final = await Form.findByIdAndUpdate(formid, { inputs: existInputs })
    res.json({ msg: 'updated' })
  } catch (error) {
    console.log('error')
  }
}
