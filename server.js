const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const equRoutes = require('./routes/route')

app.use(bodyParser.json())

app.use('/api/equation/', equRoutes)

app.listen(port, () => {
  console.log(`magic happening at ${port}`)
})
