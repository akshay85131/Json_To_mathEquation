const express = require('express')
const router = express.Router()
const parserJson = require('../controller/helper')

router.post('/input', parserJson)

module.exports = router
