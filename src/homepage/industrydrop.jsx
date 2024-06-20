import { useState } from "react"
import React from 'react'
import "./industrydrop.css"
import data from "./industrydroplist.json"

function Industrydrop() {

    const [start,setStart] = useState(data[0]);
    const [substart,setSubstart] = useState(data[0].sub[0]);

    const handlesub=(e)=>{
        const hello = data.filter(item =>item.category === e);
        setStart(hello[0]);
        setSubstart(hello[0].sub[0]);
    }
    
    const handlesubsub=(e)=>{
        const hello = start.sub.filter(item=>item.subcategory === e);
        setSubstart(hello[0]);
    };

  return (
    <div className='industrydrop'>
        <div className="left">
            {
                data.map((item,key)=>(
                <div id="part" key={key} onMouseEnter={()=>handlesub(item.category)}>
                    <p>{item.category}</p>
                </div>
                ))
            }
        </div>
        <div className="middle">
            {
                start.sub.map((item,key)=>(
                <div id="part" key={key} onMouseEnter={()=>handlesubsub(item.subcategory)}>
                    <p>{item.subcategory}</p>
                </div>
                ))
            }
        </div>
        <div className="right">
            {
                substart.subsub.map((item)=>(
                <div id="part">
                    <p>{item}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Industrydrop