const express = require('express')
const router = express.Router()
const bugFixingRouter = require('./bugFixingRouter.js')
const developmentRouter = require('./developmentRouter.js')

router.get('/', (request,response) => {
    response.send("Service Page")
    })

    router.get('/:id([0-9]{1})', (request,response) =>{
        response.json(`${request.service.name}`)
    // const pageId = Number(request.params.id)
    // const serviceId = listOfServices.find((service) => service.id === pageId )
    // console.log(serviceId)
    // console.log(pageId)
    // if(!serviceId)
    //     {
    //     response.send("Id Not Found")
    //     }
    // else
    //     {
    //         response.send(serviceId)
    //     }
    })


const services = [
    {
         name :"Web Development"
    } ,
    {
        name :"bug fixing"
    },
    {
        name :"Digital Marketing"
    },
    {
        name :"Network Service"
    },
    {
        name:"Mobile App Development"
    },
    {
        name:"SaaS"
    }
    ]

router.param('id',(request,response,next,id)=>{
    console.log(id)
    request.service = services[id]
    next()
})



router.use('/bugFixingRouter',bugFixingRouter)
router.use('/developmentRouter',developmentRouter)

module.exports = router