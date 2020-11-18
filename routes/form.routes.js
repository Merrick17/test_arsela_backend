const express = require('express')
const router = express.Router()
const formController = require('../controllers/form.controller')

router.post('/add', formController.addForm)
router.get('/', formController.getAllForms)
module.exports = router
