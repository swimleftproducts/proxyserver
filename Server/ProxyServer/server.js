const axios = require('axios')
const cors = require('cors');
const express = require('express')



//set up express instance
const app = express()

//use cors middleware

app.use(cors());

app.use(express.static('public'))

app.get("/proxy/words", async (req,res) => {
    const url= "http://loripsum.net/api/10/short/headers"
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


const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {

    console.log('listening on port 3000')
})