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
    res.status(500).json({ msg: 'Something wen wrong..' })
  }
}

module.exports.getAllForms = async (req, res) => {
  try {
    let result = await Form.find()
    res.status(200).json({ msg: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Something wen wrong..' })
  }
}
