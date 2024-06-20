import React, { useEffect } from 'react';
import "./search.css";
import search from "../images/searchbar.svg";
import "./frontpage.css";
import Countrydrop from './countrydrop';

const data=["Agriculture","Infrastructure","Tourism"];

function Search() {

    useEffect(() => {
        const element = document.querySelector(".search");
        const realelement = element.querySelector("#sticky");
        const tab = realelement.querySelector("#table");
        const pos = tab.getBoundingClientRect().top + window.scrollY;
        
        window.onscroll = () => {
            if (window.scrollY > pos) {
                realelement.style.position = "fixed";
                realelement.style.top = "-60px";
                tab.style.border = "1px solid #E0E0E0";
            } else {
                realelement.style.position = "";
                realelement.style.top = "";
                tab.style.border = "";
            }
        };
    }, []);

    return (
        <div className="search">
            <p id="firstline">INVEST IN AFRICA</p>
            <p id="para">Shaping Tomorrow Together,</p>
            <p id="para">Invest in Africa's Potential.</p>
            <div id="sticky">
                <table id="table">
                    <tbody>
                        <tr>
                            <td id="searchbar">
                                <img src={search} alt="search bar" />
                            </td>
                            <td id="searchbox">
                                <input type="text" id="input" placeholder="Search" />
                            </td>
                            <td id="button">
                                <button id="rbutton">Search</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="dropdown">
                <table id="suggest">
                    <tbody>
                        <tr>
                            <td>Frequently search:</td>
                            {
                                data.slice(0,3).map((item) => (
                                    <td id="just">{item}</td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;
