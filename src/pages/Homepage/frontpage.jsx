import React from 'react'
import "./frontpage.css"
import Navigation from '../../components/FrontpageComponents/Navigation/navigation'
import Search from '../../components/FrontpageComponents/Search/search'
import Scroll from '../../components/FrontpageComponents/Scroll/scroll'
import Why from '../../components/FrontpageComponents/Why/why'
import Map from '../../components/FrontpageComponents/Map/map'
import Review from '../../components/FrontpageComponents/Review/review'
import Endpart from '../../components/FrontpageComponents/Endpart/endpart'
import Contact from '../../components/FrontpageComponents/Contact/contact'
import crafting from "../../assets/images/crafting.png"


function Frontpage() {

  return (
    <div>
      <Navigation/>
      <div id='search'><Search/>
        <video src="https://cdn.builder.io/o/assets%2Fc06c8574749d44938d28ca8b23064d20%2F5776c75d4d574e8ead932250b0d57f73%2Fcompressed?apiKey=c06c8574749d44938d28ca8b23064d20&token=5776c75d4d574e8ead932250b0d57f73&alt=media&optimized=true" autoPlay loop muted disablePictureInPicture id='video'></video>
      </div>
      <div><Scroll/></div>
      <div><Why/></div>
      <div id='map'><Map/></div>
      <div id="crafting"><img src={crafting} alt="crafting" /></div>
      <div id='review'><Review/></div>
      <div><Contact/></div>
      <div id='endpart'><Endpart/></div>
    </div>
  )
}

export default Frontpage