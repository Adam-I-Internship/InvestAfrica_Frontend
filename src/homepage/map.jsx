import React,{useState} from 'react'
import "./map.css"
import data from "./maplist.json"
import map from "../images/map.png"
import { IoSearch } from "react-icons/io5";

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
    const [kenyaopen, setKenyaopen] = useState(false);
    const [libyaopen, setLibyaopen] = useState(false);
    const [maliopen, setMaliopen] = useState(false);
    const [nigeropen, setNigeropen] = useState(false);
    const [senegalopen, setSenegalopen] = useState(false);
    const [sudanopen, setSudanopen] = useState(false);
    const [zimbabwaopen, setZimbabwaopen] = useState(false);
    const [ethiopiaopen, setEthiopiaopen] = useState(false);
    
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
        else if(e==='Morocco'){
            setMoroccoopen(true);
        }
        else if(e==='Kenya'){
            setKenyaopen(true);
        }
        else if(e==='Libya'){
            setLibyaopen(true);
        }
        else if(e==='Mali'){
            setMaliopen(true);
        }
        else if(e==='Niger'){
            setNigeropen(true);
        }
        else if(e==='Senegal'){
            setSenegalopen(true);
        }
        else if(e==='Sudan'){
            setSudanopen(true);
        }
        else if(e==='Zimbabwa'){
            setZimbabwaopen(true);
        }
        else if(e==='Ethiopia'){
            setEthiopiaopen(true);
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
        else if(e==='Morocco'){
            setMoroccoopen(false);
        }
        else if(e==='Kenya'){
            setKenyaopen(false);
        }
        else if(e==='Libya'){
            setLibyaopen(false);
        }
        else if(e==='Mali'){
            setMaliopen(false);
        }
        else if(e==='Niger'){
            setNigeropen(false);
        }
        else if(e==='Senegal'){
            setSenegalopen(false);
        }
        else if(e==='Sudan'){
            setSudanopen(false);
        }
        else if(e==='Zimbabwa'){
            setZimbabwaopen(false);
        }
        else if(e==='Ethiopia'){
            setEthiopiaopen(false);
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
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Ff370e284e31147c78f1ffa981b30383e" alt="nigeriamap" className='nigeriamap' id={nigeriaopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Fb057d7f5313c4e6f96a68d5a8110c409" alt="egyptmap" className='egyptmap' id={egyptopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2F451275cf05ea4e19bdb30c5c953a8e81" alt="ghanamap" className='ghanamap' id={ghanaopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Fd4a18c9e23bd4835a60bd823559e32c3" alt="moroccomap" className='moroccomap' id={moroccoopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2F61356173a25142668323867b231ecdb6" alt="kenyamap" className='kenyamap' id={kenyaopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Fdcb5e9d504cb43be925dbf3536b1ccd9" alt="libyamap" className='libyamap' id={libyaopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Fe662afc51a5a4fd7858bcdd8b9724405" alt="malimap" className='malimap' id={maliopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2F1f2e4212385148e1bb0460e287a1b416" alt="nigermap" className='nigermap' id={nigeropen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2F4f2c528e61104242a98e21b22af39516" alt="senegalmap" className='senegalmap' id={senegalopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Fdbed164106fb478c882c1993a3dfb70a" alt="sudanmap" className='sudanmap' id={sudanopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2Ff86a94c71b3b4610b858f12db136bf4a" alt="zimbabwamap" className='zimbabwamap' id={zimbabwaopen ? 'open' : ''}/>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc06c8574749d44938d28ca8b23064d20%2F8a3821f4bfd44651be947cbee61fc87d" alt="ethiopiamap" className='ethiopiamap' id={ethiopiaopen ? 'open' : ''}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map