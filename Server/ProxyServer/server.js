const axios = require('axios')
const cors = require('cors');
const express = require('express')
const path = require('path')
const paramLogic = require('./paramLogic.js')


//set up express instance
const app = express()

//use cors middleware

app.use(cors());


//app.use(express.static(path.join(__dirname,'public')))

app.use(express.static(path.join(__dirname, 'build')))

app.get("/proxy/words", async (req,res) => {
    const baseUrl= "http://loripsum.net/api"
    
     try{
        const fullUrl=  paramLogic(req.query, baseUrl)
         const data = await axios.get(fullUrl)
         res.json(data.data)
     } catch(err){
         res.send("could not complete")
        //console.log(err)
     }
 })

app.get("/proxy", async (req,res) => {
   const url= req.query.url
   console.log(url)

    try{
        const data = await axios.get(url)
        res.json(data.data)
    } catch(err){
        res.send("could not complete")
      //  console.log(err)
    }
})


app.get("/",(req,res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname,"build",'index.html'))
   
    
    // res.send(Buffer.from("<h2>Eric's first project!</h2><p> use a GET to /proxy/ and follow with the desired url"));
    
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,() => {

    console.log('listening on port',PORT)
})