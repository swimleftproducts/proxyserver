import React, {useState} from 'react';
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'


const App = () => {
    const [activeMenu, setActiveMenu]= useState("HOME")
    return(
        <div>
           <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
           <Body activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
           <Footer/>
        </div>
    )
}

export default App