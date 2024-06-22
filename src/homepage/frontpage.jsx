import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./frontpage.css"
import Navigation from './navigation'
import Search from './search'
import ScrollComponent from './scrollcomponent'
import Map from './map'
import Review from './review'
import Endpart from './endpart'
import vid from "../images/kfp.mp4"
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import crafting from "../images/crafting.png"


function Frontpage() {

  const navigator = useNavigate();
  return (
    <div>
      <Navigation/>
      <div id='search'>
        <Search/>
        <video src={vid} autoPlay loop muted id='video'></video>
      </div>
      <div className='scroll'>
        <table>
          <tr>
              <td>
              <a href="#why">
                  <div className="contain" id="whylink">
                      <div id="head">
                          <p>WHY INVEST IN AFRICA?</p>
                      </div>
                      <div id="body">
                          <p>Pro Business</p>
                          <p>Youthful Population</p>
                          <p>Growing Econimics</p>
                      </div>
                      </div>
              </a>
              </td>
              <td>
              <a href="#map">
                  <div className="contain" id="maplink">
                      <div id="head">
                          <p>WORLD OF AFRICA</p>
                      </div>
                      <div id="body">
                          <p>A continent of diversity</p>
                          <p>and beauty where</p>
                          <p>flourishes, and business</p>
                          <p>opportunities abound.</p>
                      </div>
                  </div>
              </a>
              </td>
              <td>
              <a href="#crafting">
                  <div className="contain" id="craftlink">
                      <div id="head">
                          <p>Crafting Tomorrow's Success</p>
                      </div>
                      <div id="body">
                          <p>Human Capital</p>
                          <p>Natural Resources</p>
                          <p>Finance</p>
                          <p>Infrastructure</p>
                      </div>
                  </div>
              </a>
              </td>
              <td>
              <a href="#contact">
                  <div className="contain" id="contactlink">
                      <div id="head">
                          <p>Contact Us</p>
                      </div>
                      <div id='body'>
                          <p>Join our business and be</p>
                          <p>part of something</p>
                          <p>extraordinary!</p>
                      </div>
                  </div>
              </a>
              </td>
          </tr>
        </table>
      </div>
      <div id='why'>
        <p id="head">Why Invest in Africa</p>
        <div id='detail'>
          <table>
            <tr>
              <td>
                <img src={pic1} alt="pic1"/>
              </td>
              <td>
                <p>Business-friendly environment with political
                  stability, resilient economy, dynamic investor
                  friendly environment and Government incentives.</p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <p>Tap into a burgeoning youth market brimming with
                  1.46 billion potential consumers, a demographic
                  primed for dynamic growth and innovation.</p>
              </td>
              <td>
                <img src={pic2} alt="pic1"/>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <img src={pic3} alt="pic1"/>
              </td>
              <td>
                <p>Leverage a robust economic landscape with a GDP
                  of $108 billion, reflecting a flourishing market ripe
                  for lucrative investment opportunities.</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <ScrollComponent />
        </div>
      </div>
      <div id='map'>
        <Map/>
      </div>
      <div id="crafting">
        <img src={crafting} alt="crafting" />
      </div>
      <div id='review'>
        <Review/>
      </div>
      <div id="contact">
        <div>
          <p id='first'>READY TO GET STARTED?</p>
          <p id="second">Invest in the future of Africa by signing up today!</p>
          <div id="button">
            <button id='realbutton' onClick={()=>navigator("/register")}>Sign Up</button>
          </div>
        </div>
      </div>
      <div id='endpart'>
        <Endpart/>
      </div>
    </div>
  )
}

export default Frontpage