import React,{useState} from 'react'
import "./countrydrop.css"
import { MdArrowOutward } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import data from "./maplist.json"
import map from "../images/smallmap.png"
import scim from "../images/dropscroll.png"

function Countrydrop() {

    const [search, setSearch] = useState("");
    const countrylist = data.filter(e=>e.name.toLowerCase().includes(search.toLowerCase()));

    const handleCountry=(e)=>{
        const std = {
            "name":e
        }
        console.log(std.name);
    }

  return (
    <div className="countrydrop">
        <div className="top">
            <div id="left">
                <div id="text">
                    <p>COUNTRIES</p>
                </div>
                <div id="input">
                    <table>
                        <tr>
                            <td><IoSearch /></td>
                            <td>
                                <input type="text" placeholder='search' id='dropsearch1' value={search} onChange={e=>{setSearch(e.target.value)}}/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="right">
                <div id="image">
                    <a href="#map"><img src={map} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div id="scroll">
            {
                countrylist.map((country,key)=>(
                    <div className='contain' key={key} onClick={()=>handleCountry(country.name)}>
                        <div id="text">
                            <p>{country.name} <MdArrowOutward/></p>
                        </div>
                        <img src={scim} alt="scrollimage" id='flag'/>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Countrydrop