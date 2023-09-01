const express = require("express") 
const app = express() ;
const user = require("./db/schema")
const db = require("./db/db")
const mongoose = require("mongoose") 


const users = [
    {id : 1, name : "User 1"},
    {id : 2, name : "User 2"},
    {id : 3, name : "User 3"},
    {id : 4, name : "User 4"},
    {id : 5, name : "User 5"},
    {id : 6, name : "User 6"},
    {id : 7, name : "User 7"},
    {id : 8, name : "User 8"},
    {id : 9, name : "User 9"},
    {id : 10,name : "User 10"},
    {id : 11, name : "User 11"},
    {id : 12, name : "User 12"},
    {id : 13, name : "User 13"},
    {id : 14, name : "User 14"},
    {id : 15, name : "User 15"},
    {id : 16, name : "User 16"},

]

// http://localhost:3000/users?page=1&limit=5
//middleware 

const paginatedresult = (model) => { 
    return (req,res,next) => { 
        const page = parseInt(req.query.page )
    const limit = parseInt(req.query.limit) 

    const startIndex = (page-1)*limit
    const endIndex = (page*limit)

    const result = {} 

    result.next =  { 
        page : page+ 1,
        limit : limit 

    }

    result.previous =  { 
        page : page- 1,
        limit : limit 

    }

    result.result = model.slice(startIndex,endIndex)
    res.paginatedresult = result
    next()
    }

}




app.get("/" , (req,res) => { 
    res.send("Pagination")
})

app.get("/users",paginatedresult(users),(req,res) => { 
    
    res.json(result) ;
})





app.listen(3000,() => {
    console.log("Port 3000 is working")
})