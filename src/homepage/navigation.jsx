import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import Countrydrop from './countrydrop';
import About from './about';
import Industrydrop from './industrydrop';
import logo from '../images/logo.png';

function Navigation() {
  const [iscountry, setIscountry] = useState(false);
  const [isindustry, setIsindustry] = useState(false);
  const [isabout, setIsabout] = useState(false);

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="invest africa" />
      </Link>
      <div className="mainnav">
        <div id="nav1">
          <div id="subnav1">
            <a href="#" id="a1">
              Eng
              <CiGlobe id="globe" />
            </a>
            <Link to="/Register" id="a2">
              Signup
            </Link>
            <Link to="/Login">
              <button>Login</button>
            </Link>
          </div>
        </div>
        <div id="nav2">
          <button
            className="but"
            id={iscountry ? 'open1' : ''}
            onMouseEnter={() => setIscountry(true)}
            onMouseLeave={() => setIscountry(false)}
          >
            Country {iscountry ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <button
            className="but"
            id={isindustry ? 'open1' : ''}
            onMouseEnter={() => setIsindustry(true)}
            onMouseLeave={() => setIsindustry(false)}
          >
            Industry {isindustry ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <button
            className="but"
            id={isabout ? 'open1' : ''}
            onMouseEnter={() => setIsabout(true)}
            onMouseLeave={() => setIsabout(false)}
          >
            About {isabout ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
      <div className="dropdown">
        <div
          id="country1"
          className={iscountry ? 'open' : ''}
          onMouseEnter={() => setIscountry(true)}
          onMouseLeave={() => setIscountry(false)}
        >
          <Countrydrop />
        </div>
        <div
          id="industry"
          className={isindustry ? 'open' : ''}
          onMouseEnter={() => setIsindustry(true)}
          onMouseLeave={() => setIsindustry(false)}
        >
          <Industrydrop />
        </div>
        <div
          id="about"
          className={isabout ? 'open' : ''}
          onMouseEnter={() => setIsabout(true)}
          onMouseLeave={() => setIsabout(false)}
        >
          <About />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
