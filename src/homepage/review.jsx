import React,{useRef} from 'react'
import "./review.css"
import prev from "../images/back.png"
import next from "../images/next.png"
import profile from "../images/profileicon.png"

function Review() {

    const scrollRef = useRef(null);
    
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
                <div id="part">
                    <table>
                        <tr>
                            <td><img src={profile} alt="profile" id='profile' /></td>
                            <td>
                                <p id='name'>John Doe</p>
                                <p id="desc">CEO of Company</p>
                            </td>
                            <td>
                                <div id="text">
                                I found more than a continent; I discovered a journey of opportunity. With perseverance, I turned challenges into triumphs, building a successful venture from the ground up. Africa's dynamic landscape fueled my ambition, and today, I stand as a testament to the boundless possibilities this continent offers.
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="part">
                    <table>
                        <tr>
                            <td><img src={profile} alt="profile" id='profile' /></td>
                            <td>
                                <p id='name'>John Doe</p>
                                <p id="desc">CEO of Company</p>
                            </td>
                            <td>
                                <div id="text">
                                I found more than a continent; I discovered a journey of opportunity. With perseverance, I turned challenges into triumphs, building a successful venture from the ground up. Africa's dynamic landscape fueled my ambition, and today, I stand as a testament to the boundless possibilities this continent offers.
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="part">
                    <table>
                        <tr>
                            <td><img src={profile} alt="profile" id='profile' /></td>
                            <td>
                                <p id='name'>John Doe</p>
                                <p id="desc">CEO of Company</p>
                            </td>
                            <td>
                                <div id="text">
                                I found more than a continent; I discovered a journey of opportunity. With perseverance, I turned challenges into triumphs, building a successful venture from the ground up. Africa's dynamic landscape fueled my ambition, and today, I stand as a testament to the boundless possibilities this continent offers.
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <img src={next} alt="next" id='next' onClick={scrollRight}/>
        </div>
    </div>
    
  )
}

export default Review