const express = require('express')
const app = express()
var cors = require('cors')
const homeRouter = require('./homePage.js')
const aboutUsRouter = require('./aboutUs.js')
const ContactUsRouter = require('./ContactUs.js')
const serviceRouter = require('./Services/service.js')

app.get('/', (request,response) => {
        response.send("APP.JS")
    })

  
app.use(cors());  
app.use('/homePage',homeRouter)
app.use('/aboutUs',aboutUsRouter)
app.use('/ContactUs',ContactUsRouter)
app.use('/Service',serviceRouter)




app.listen(3500)
