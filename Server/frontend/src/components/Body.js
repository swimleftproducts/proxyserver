import React from 'react';
import { render } from 'react-dom';

const Body = (props) => {
    
    const renderBody =() => {
        if(props.activeMenu==="HOME"){
          return(
            <div className="pusher" >
                <div className="ui inverted vertical masthead center aligned segment" style={{"min-height":"90vh"}}>         
                    <div className="ui text container">
                    <h1 className="ui inverted header">
                    Proxy server API
                    </h1>
                    <h2>Get around anoying server side CORS issues.</h2>
                    <div 
                    onClick={(() => {
                        props.setActiveMenu("LORIPSUM")
                    })}
                    className="ui huge primary button">
                        Get Started <i className="right arrow icon"></i>
                    </div>
                </div>
                </div>
            </div>
          )
        }else if( props.activeMenu==="LORIPSUM"){
            return(
                <div className="pusher" >
                <div className="ui inverted vertical masthead  aligned segment" style={{"min-height":"90vh"}}>         
                    <div className="ui text container">
                    <h1   style={{ "margin-top": "5em"}}>
                    Make a call to the API found here:<br/>
                    <a href="https://loripsum.net/">Sorce</a>
                    </h1>
                    <h2>Currently a call to this api will result in a CORS rejection because the header is not set as required by the browser</h2>
                    <div>
                      <p> This site proxides a proxy server that lets you make a call to https://enigmatic-savannah-03269.herokuapp.com/api/words and received back JSON loripsum according to the parameters you send.
                        </p>
                        <p>
                            Supported parameters are:
                        </p>
                        <div class="ui list">
                            <div class="item">plaintext=true ... no html tags</div>
                            <div class="item">number=(integer) ... number of paragraphs to return</div>
                            <div class="item">decorate=true ... add html styling</div>
                            <div class="item">dl=true ... add description lists</div>
                            <div class="item">headers=true ... add html headers</div>
                            <div class="item">length= short medium or long  ... add length of each paragraph of content</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            )
        }else if (props.activeMenu==="OWNAPI"){
            return(
                <div className="pusher" >
                <div className="ui inverted vertical masthead  aligned segment" style={{"min-height":"90vh"}}>         
                    <div className="ui text container">
                    <h1   style={{ "margin-top": "5em"}}>
                        Comming soon ...
                    </h1>
                        
                    </div>
                </div>
                </div>
            
                
            )
        }
    }

    return(
       <div>
           {renderBody()}
       </div>
        
    )
}

export default Body