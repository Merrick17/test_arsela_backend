const valueController = require('../controllers/values.controller')
const express = require('express')

const router = express.Router()

router.post('/submit', valueController.submitValues)
router.get('/:form/:field', valueController.getValuesByFormAndField)
module.exports = router
