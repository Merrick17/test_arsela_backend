const Value = require("../models/values.model");

module.exports.submitValues = async (req, res) => {
  try {
    let form = req.body.form;
    let values = req.body.values;
    let newValues = new Value({
      formId: form,
      values: values,
    });
    let result = await newValues.save();
    res.status(200).json({ msg: "Values Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something wen wrong.." });
  }
};

module.exports.getValuesByFormAndField = async (req, res) => {
  try {
    let formId = req.params.form;
    let fieldName = req.params.field;
    let finalResult = await Value.aggregate([
      { $group: { _id: "$values.value", vale: { $push: "$values.value" } } },
    ]);

    res.status(200).json({ msg: finalResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong.." });
  }
};
