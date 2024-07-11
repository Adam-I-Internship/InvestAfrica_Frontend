import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigator = useNavigate();
    return (
    <div id="contact">
        <div>
          <p id='first'>READY TO GET STARTED?</p>
          <p id="second">Invest in the future of Africa by signing up today!</p>
          <div id="button">
            <button id='realbutton' onClick={()=>navigator("/register")}>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default Contact