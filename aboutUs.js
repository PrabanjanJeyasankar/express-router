const express = require('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.json("About Page")
    })

module.exports = router