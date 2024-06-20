import React from 'react'
import "./about.css"

function About() {

  return (
    <div className='aboutpage'>
        <div id="head">
            ABOUT
        </div>
        <div id="remain">
           <a href="#endpart"><div id="part"><p>ABOUT US</p></div></a>
           <a href="#"><div id="part"><p>MATCHING PLATFORM</p></div></a>
           <a href="#"><div id="part"><p>FAQ</p></div></a>
           <a href="#"><div id="part"><p>HELP</p></div></a>
        </div>
    </div>
  )
}

export default About