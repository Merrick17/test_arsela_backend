const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const formRoutes = require('./routes/form.routes')
const valuesRoutes = require('./routes/values.routes')
require('dotenv').config()
var cors = require('cors')
const app = express()
//permet de conncecte sur mongodb et verifier si la base de donner et connecter ou non
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.log(err)
  })

app.use(cors())
// permet de 'accesser au 'Body' de la requete envoyé
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
// déclaration des routes
app.use('/form', formRoutes)
app.use('/values', valuesRoutes)

const port = process.env.PORT || 3500

app.listen(port, () => {
  console.log(`App Running on ${port}`)
})
