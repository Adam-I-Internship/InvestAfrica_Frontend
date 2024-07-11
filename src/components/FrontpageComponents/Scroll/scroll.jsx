import React from 'react'

function Scroll() {
  return (
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
  )
}

export default Scroll