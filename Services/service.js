const express = require('express')
const router = express.Router()
let listOfServices = [

    {
    
    "id":1,
    
     "name":"Web Development"
    
    } ,
    
    {
    
    "id":2,
    
    "name":"bug fixing"
    
    }
    
    ]
    
      
    
    router.get('/', (request,response) => {
    
    response.send("Service Page")
    
    })
    
      
    
    router.get('/:id', (request,response) =>{
    
    const pageId = Number(request.params.id)
    
    const serviceId = listOfServices.find((service) => service.id ===  pageId )
    
    console.log(serviceId)
    
    console.log(pageId)
    
    if(!serviceId)
    
    {
    response.send("Id Not Found")
    
    }
    
    else
    
        {
    
            response.json(serviceId)
    
    }
    
      
    
    })
module.exports = router