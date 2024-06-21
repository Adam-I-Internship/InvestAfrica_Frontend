import React,{useState} from 'react'
import "./navigation.css"
import Countrydrop from './countrydrop'
import About from './about'
import Industrydrop from './industrydrop'
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import logo from "../images/logo.png"

function Navigation() {

    const [iscountry,setIscountry] = useState(false);
    const [isindustry,setIsindustry] = useState(false);
    const [isabout,setIsabout] = useState(false);

    return (
    <div className='nav'>
        <img src={logo} alt="invest africa" />
        <div className='mainnav'>
        <div id="nav1">
            <div id='subnav1'>
            <a href="#" id='a1'>Eng<CiGlobe id="globe"/></a>
            <a href="#" id='a2'>Signup</a>
            <button>Login</button>
            </div>
        </div>
        <div id='nav2'>
            <button className='but' id={iscountry ? 'open1' : ''} onMouseEnter={()=>setIscountry(true)} onMouseLeave={()=>setIscountry(false)}>Country {iscountry ? <FaChevronUp/> : <FaChevronDown/>}</button>
            <button className='but' id={isindustry ? 'open1' : ''} onMouseEnter={()=>setIsindustry(true)} onMouseLeave={()=>setIsindustry(false)}>Industry {isindustry ? <FaChevronUp/> : <FaChevronDown/>}</button>
            <button className='but' id={isabout ? 'open1' : ''} onMouseEnter={()=>setIsabout(true)} onMouseLeave={()=>setIsabout(false)}>About {isabout ? <FaChevronUp/> : <FaChevronDown/>}</button>
        </div>
        </div>
        <div className="dropdown">
            <div id="country" className={iscountry ? "open" : ""} onMouseEnter={()=>setIscountry(true)} onMouseLeave={()=>setIscountry(false)}>
                <Countrydrop/>
            </div>
            <div id="industry" className={isindustry ? "open" : ""} onMouseEnter={()=>setIsindustry(true)} onMouseLeave={()=>setIsindustry(false)}>
                <Industrydrop/>
            </div>
            <div id="about" className={isabout ? "open" : ""} onMouseEnter={()=>setIsabout(true)} onMouseLeave={()=>setIsabout(false)}>
                <About/>
            </div>
        </div>
    </div>
  )
}

export default Navigation