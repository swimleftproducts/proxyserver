

const paramLogic = (query,url) =>{
    console.log(url)
    
   if("number" in query){
       url = url +"/"+ query.number
   }
   if("length" in query){
       url = url +"/"+ query.length
    }
    if("decorate" in query){
        url = url +"/"+ query.decorate
    }
    if("dl" in query){
         url = url +"/"+ url,query.dl
    }
    if("headers" in query){
         url = url+"/"+ query.headers
    }
    if("plaintext" in query){
                url = url+"/plaintext"
    }

    return url
}

module.exports = paramLogic
