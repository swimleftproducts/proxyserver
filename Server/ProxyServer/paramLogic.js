

const paramLogic = (query,url) =>{
    console.log(url)
    console.log(query)
    
   if("number" in query){
       url = url +"/"+ query.number
   }
   if("length" in query){
       url = url +"/"+ query.length
    }
    if("decorate" in query){
        if(query.decorate){
            url = url +"/"+ "decorate"
        }
    }
    if("dl" in query){
        if(query.dl){
            url = url +"/"+ "dl"
        }
         
    }
    if("headers" in query){
        if(query.headers){
            url = url+"/"+ "headers"
        }
    }
    if("plaintext" in query){
        if(query.plaintext){
            url = url+"/plaintext"
        }                
    }
    console.log(url)

    return url
}

module.exports = paramLogic
