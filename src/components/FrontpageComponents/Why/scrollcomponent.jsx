import React, { useRef } from 'react';
import "../../../pages/Homepage/frontpage.css"
import data from "./industrylist.json"
import prev from "../../../assets/images/back.png"
import next from "../../../assets/images/next.png"

function Scrollcomponent() {

    const handleIndustry = (e)=>{
        const text = {
            "name":e
        }
        console.log(text.name);
    }
    const scrollRef = useRef(null);
    
    const scrollRight = () => {
        const width = document.querySelector("#box").querySelector("#scrollwrap").querySelector("#scroll").querySelector("#part").offsetWidth;
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: width, behavior: 'smooth' });
        }
    };
    
    const scrollLeft = () => {
        const width = document.querySelector("#box").querySelector("#scrollwrap").querySelector("#scroll").querySelector("#part").offsetWidth;
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -width, behavior: 'smooth' });
        }
    };

  return (
    <div id='box'>
        <div id='top'>
            <p>Top Industries</p>
        </div>
        <div id='scrollwrap'>
        <img src={prev} alt="prev" id='prev' onClick={scrollLeft}/>
        <div id='scroll' ref={scrollRef}>
            {
                data.map((item, index) => (
                    <div id='part' key={index} onClick={()=>handleIndustry(item.name)}>
                        <table>
                            <tr>
                            <td><img src={item.image} alt="" id='image'/></td>
                            </tr>
                            <tr>
                            <td><p>{item.name}</p></td>
                            </tr>
                        </table>
                    </div>
                ))
            }
        </div>
        <img src={next} alt="next" id='next' onClick={scrollRight}/>
        </div>
    </div>
  )
}

export default Scrollcomponent