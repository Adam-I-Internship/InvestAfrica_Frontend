import React,{useState} from 'react'
import "./map.css"
import data from "./maplist.json"
import map from "../images/map.png"
import { IoSearch } from "react-icons/io5";
import nigeriamap from "../images/mapicon/nigeria.png"
import egyptmap from "../images/mapicon/egypt.png"
import ghanamap from "../images/mapicon/ghana.png"

function Map() {
    
    const [search, setSearch] = useState('');
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    
    const name = data.filter(e=>e.name.toLowerCase().includes(search.toLowerCase()));
    
    const [nigeriaopen, setNigeriaopen] = useState(false);
    const [moroccoopen, setMoroccoopen] = useState(false);
    const [egyptopen, setEgyptopen] = useState(false);
    const [ghanaopen, setGhanaopen] = useState(false);
    
    const openmap=(e)=>{
        if(e=='Nigeria'){
            setNigeriaopen(true);
        }
        else if(e==='Egypt'){
            setEgyptopen(true);
        }
        else if(e==='Ghana'){
            setGhanaopen(true);
        }
    }
    
    const closemap = (e)=>{
        if(e=='Nigeria'){
            setNigeriaopen(false);
        }
        else if(e==='Egypt'){
            setEgyptopen(false);
        }
        else if(e==='Ghana'){
            setGhanaopen(false);
        }
    }
    
  return (
    <div className="container">
        <div className="head">
            <p>Discover Africa</p>
        </div>
        <div className="body">
            <div id="scrollwrap">
                <div id="input">
                    <table>
                        <tr>
                            <td id='searchbar'><IoSearch /></td>
                            <td><input type="text" id='text' placeholder='Search countries' value={search} onChange={handleSearch}/></td>
                        </tr>
                    </table>
                </div>
                <div id="scroll">
                    {
                        name.map((item, index) => (
                        <div className='contain' key={index} onMouseEnter={()=>openmap(item.name)} onMouseLeave={()=>closemap(item.name)}>
                            <img src={item.flag} alt="flag" id='flag'/>
                        <p id="name">{item.name}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div id="mapcontainer">
                <img src={map} alt="map" id='map'/>
                <div className="highlight">
                    <img src={nigeriamap} alt="nigeriamap" className='nigeriamap' id={nigeriaopen ? 'open' : ''}/>
                    <img src={egyptmap} alt="egyptmap" className='egyptmap' id={egyptopen ? 'open' : ''}/>
                    <img src={ghanamap} alt="ghanamap" className='ghanamap' id={ghanaopen ? 'open' : ''}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map