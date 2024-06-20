import React from 'react'
import "./endpart.css"
import facebook from "../images/social/facebook.png"
import insta from "../images/social/insta.png"
import twitter  from "../images/social/twitter.svg"
import youtube from "../images/social/youtube.png"

function Endpart() {
  return (
    <div className="remain">
        <div id="social">
          <table>
            <tr>
              <td><img src={facebook} alt="facebook" /></td>
              <a href="https://www.facebook.com/AdamInnovations/"><td id='link'>Facebook</td></a>
            </tr>
            <tr>
              <td><img src={insta} alt="instagram" /></td>
              <a href="https://www.instagram.com/adaminnovations/?hl=en"><td id='link'>Instagram</td></a>
            </tr>
            <tr>
              <td><img src={twitter} alt="X" /></td>
              <a href="#"><td id='link'>X</td></a>
            </tr>
            <tr>
              <td><img src={youtube} alt="Youtube" /></td>
              <a href="https://www.youtube.com/watch?v=v4Uh1XdF2cA"><td id='link'>Youtube</td></a>
            </tr>
          </table>
        </div>
        <div id="right">
          <p id="first">Adam Innovations Co., Ltd</p>
          <p id="middle">Global IT Park1188-2, Urusa, Minami</p>
          <p id="middle">UonumaNiigata 9497302 Japan</p>
          <a href="tel:+81 25-788-0665"><p id="middle">Tel: (+81)25-788-0665</p></a>
          <p id="middle"><a href="mailto:info@adam-i.jp">Email:info@adam-i.jp</a></p>
          <p id="last">Copyright ©2023 Invest Africa. All rights reserved.</p>
        </div>
      </div>
  )
}

export default Endpart