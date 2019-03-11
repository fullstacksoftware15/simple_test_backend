require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const controller = require('./controller.js')

const port = process.env.PORT | 3000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to DB')
})

app.get('/', (req, res) => res.send('Welcome!'))
app.get('/create', async (req, res) =>
  res.send(await controller.createCampaign(req.query.name, req.query.type))
)
app.get('/delete', async (req, res) => res.send(await controller.deleteAll()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
