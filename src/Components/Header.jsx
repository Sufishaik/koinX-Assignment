import React, { useState } from 'react'
import "../Components/HeaderStyle.css";
import Logo from "../assets/Frame 26863.svg"
import Bar from "../assets/menu-black-18dp.svg"
import Cut from "../assets/octicon_x-16 (1).svg"
function Header() {
    const [ham, setham] = useState(false);
    return (
      
        <div className={!ham ? 'header' : 'header ham'}>
            <img src={Logo} alt="" />
            <img src={Bar} alt=""  className='bar' onClick={() => setham(true)}/>
            <img src={Cut} alt="" className={ham ? 'cut on' : ' cut off'} onClick={() => setham(false)}/>
            <div className={!ham ? 'ul-li' : ' ham'}>
               
            <ul>
                <li>Features</li>
                <li>Exchanges</li>
                <li>How it works?</li>
                <li>Blog</li>
                <li>About us</li>
                <button>Sign In</button>
            </ul>
            </div>
        </div>
       
    )
}

export default Header
