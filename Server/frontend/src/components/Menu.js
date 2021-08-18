import React from 'react';

const Menu = (props) => {
    
    return(
        
    <div className="ui large top fixed  menu" style={{"min-height":"60px"}}>
        <div className="ui container">
             <span onClick={(() => {
                 props.setActiveMenu("HOME")
             })} className="item">Home</span>
            <span onClick={(() => {
                 props.setActiveMenu("LORIPSUM")
             })} className="item text">Loripsum API</span>
            <span onClick={(() => {
                 props.setActiveMenu("OWNAPI")
             })} className="item">Your own API</span>
            <div className="right menu  ">
            <div style={{"max-height":"55px"}}>
            
            <img alt="logo" 
            src="http://34.220.35.170/wp-content/uploads/2020/01/SwimLeft_SiteLogoDark.png"
            style={{ "margin-top": ".7em"}}
            className=" ui image "
            />
            </div>
            </div>            
        </div>   
    </div>
        
    )
}

export default Menu