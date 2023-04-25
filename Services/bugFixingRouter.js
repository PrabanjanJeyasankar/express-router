
const express = require('express')
const router = express.Router()

router.get('/', (request,response) => {

     response.send("Bug Fixing Service")
    
    })

module.exports = router