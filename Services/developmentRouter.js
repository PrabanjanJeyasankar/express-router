const express = require('express')
const router = express.Router()

router.get('/', (request,response) => {

    response.send("Development Service")
    
    })

module.exports = router