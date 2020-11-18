const Form = require("../models/form.model");

module.exports.addForm = async (req, res) => {
  let title = req.body.title;
  let desc = req.body.desc;

  try {
    let newForm = new Form({
      title: title,
      description: desc,
    });
    let result = await newForm.save();
    res.status(200).json({ msg: "Form Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something wen wrong.." });
  }
};
