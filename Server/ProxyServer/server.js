const axios = require('axios')
const cors = require('cors');
const express = require('express')
const path = require('path')


//set up express instance
const app = express()

//use cors middleware

app.use(cors());

console.log(path.join(__dirname,'public'))

app.use(express.static(path.join(__dirname,'public')))

app.get("/proxy/words", async (req,res) => {
    const url= "http://loripsum.net/api/1/short"
    console.log(url)
 
     try{
         const data = await axios.get(url)
         res.json(data.data)
     } catch(err){
         res.send("could not complete")
       //  console.log(err)
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
    res.send(Buffer.from("<h2>Eric's first project!</h2><p> use a GET to /proxy/ and follow with the desired url"));
    
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {

    console.log('listening on port 3000')
})