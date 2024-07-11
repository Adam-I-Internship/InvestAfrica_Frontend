import React from 'react'
import pic1 from "../../../assets/images/pic1.png"
import pic2 from "../../../assets/images/pic2.png"
import pic3 from "../../../assets/images/pic3.png"
import ScrollComponent from './scrollcomponent'

function Why() {
  return (
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
  )
}

export default Why