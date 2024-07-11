import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import data from "./review.json"
import "./review.css"
import prev from "../../../assets/images/back.png"
import next from "../../../assets/images/next.png"
import profile from "../../../assets/images/profileicon.png"

function Review() {

    const scrollRef = useRef(null);
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:9090/api/reviewroute")
    //     .then(res => {
    //         setData(res.data);
    //     })
    // })
    
    const scrollRight = () => {
        const width = document.querySelector(".reviewwrap").querySelector("#body").querySelector("#fun").querySelector("#part").offsetWidth;
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: width, behavior: 'smooth' });
        }
    };
    
    const scrollLeft = () => {
        const width = document.querySelector(".reviewwrap").querySelector("#body").querySelector("#fun").querySelector("#part").offsetWidth;
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -width, behavior: 'smooth' });
        }
    };

  return (
    <div className="reviewwrap">
        <div id="head">
            <p>Success Stories</p>
        </div>
        <div id="body" >
            <img src={prev} alt="prev" id='prev' onClick={scrollLeft}/>
            <div  id='fun' ref={scrollRef}>
                {
                    data.map((data,key) => (
                        <div id="part">
                            <table>
                                <tr>
                                    <td><img src={profile} alt="profile" id='profile' /></td>
                                    <td>
                                        <p id='name'>{data.name}</p>
                                        <p id="desc">{data.position}</p>
                                    </td>
                                    <td>
                                        <div id="text">{data.review}
                                        </div>
                                    </td>
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

export default Review