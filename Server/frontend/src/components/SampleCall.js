import React, {useState, useEffect} from 'react';
import axios from 'axios'

const SampleCall = () => {
    const [plaintext, setPlaintext] = useState(true)
    const [headers, setHeaders] = useState(true)
    const [length, setLength] = useState("short")
    const [dl, setDl] = useState(true)
    const [number, setNumber] = useState(2)
    const [decorate, setDecorate] = useState(true)

    const [params,setParams]= useState({length:0})
    const [content,setContent] = useState("")
    const [showContent,setShowContent]=useState(false)
    

    const makeApiCall= () => {
       let params={}
       if(plaintext){params.plaintext=true}
       if(headers){params.headers=true}
       if(dl){params.dl=true}
       if(decorate){params.decorate=true}
       params.number=number;
       params.length=length
       setParams(params)
    }

    useEffect(() =>  {
        if(showContent){
        const apiCall = async (req,res) => {
           const baseUrl= "https://enigmatic-savannah-03269.herokuapp.com/proxy/words"
           try{
               const data = await axios.get(baseUrl,
                   {params:params})
               setContent(data.data)

            } catch(err){
               
               //console.log(err)
            }
       }
       apiCall()
    }
       
   },[params])




    return(
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="inline field">
                    <div className="ui checkbox">
                    <input   onChange={(e) => {                 
                    setPlaintext(e.target.checked)                       
                    }}
                    type="checkbox" checked={plaintext} tabindex="0" className=""/>
                    <label>plaintext : check for true, uncheck for false</label>
                    </div>
                </div>
                <div className="three fields">
                    <div className="field">
                    <label>Number of paragraphs</label>
                    <input value={number} placeholder="integer" type="number"
                    onChange={(e) => {                 
                    setNumber(e.target.value)                       
                    }}
                    />
                    </div>
                    <div className="field">
                    <label>Length: short medium or long</label>
                    <input onChange={(e) => {                 
                    setLength(e.target.value)                       
                    }} value={length} placeholder="length" type="text"/>
                    </div>
                </div>
                <div className="inline field">
                    <div className="ui checkbox">
                    <input onChange={(e) => {                 
                    setDecorate(e.target.checked)                       
                    }}
                    checked={decorate} type="checkbox" tabindex="0" className=""/>
                    <label>decorate : check for true, uncheck for false</label>
                    </div>
                </div>
                <div className="inline field">
                    <div className="ui checkbox">
                    <input onChange={(e) => {                 
                    setHeaders(e.target.checked)                       
                    }}checked={headers} type="checkbox" tabindex="0" className=""/>
                    <label>headers : check for true, uncheck for false</label>
                    </div>
                </div>
                <div className="inline field">
                    <div className="ui checkbox">
                    <input onChange={(e) => {                 
                    setDl(e.target.checked)                       
                    }}checked={dl} type="checkbox" tabindex="0" className=""/>
                    <label>dl : check for true, uncheck for false</label>
                    </div>
                </div>
               
                <div onClick={() => {
                    setShowContent(true)
                    makeApiCall()
                }} className="ui submit button">Submit</div>
            </div>
            <div className="ui segment">
                
                {showContent?content:"On submit results appear here"}
            </div>
         </div>

    )
}

export default SampleCall