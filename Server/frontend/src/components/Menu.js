import React from 'react';



const Menu = (props) => {
    
    return(
        
    <div className="ui large top fixed  menu" style={{"minHeight":"60px"}}>
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
            <div style={{"maxHeight":"55px"}}>
            
            <img alt="logo" 
            src="/SwimLeft_SiteLogoDark.png"
            style={{ "marginTop": ".7em"}}
            className=" ui image "
            />
            </div>
            </div>            
        </div>   
    </div>
        
    )
}

export default Menu