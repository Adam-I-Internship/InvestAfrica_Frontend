import React, { useEffect,useState } from 'react';
import "./search.css";
import { IoSearch } from "react-icons/io5";
import company from "./company.json";

function Search() {

    const [search, setSearch] = useState("");
    const [suggest, setSuggest] = useState(false);

    const companydata = company.filter(f => f.company_name.toLowerCase().includes(search.toLowerCase()));

    const handleInput =(e)=>{
        setSearch(e.target.value);
        setSuggest(true);
    }

    useEffect(() => {
        const element = document.querySelector(".search");
        const realelement = element.querySelector("#sticky");
        const tab = realelement.querySelector("#table");
        const pos = tab.getBoundingClientRect().top + window.scrollY;
        const inputfield = tab.querySelector("#searchbox");
        
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
                                <IoSearch />
                            </td>
                            <td id="searchbox">
                                <input type="text" id="input" placeholder="Search" value={search} onChange={handleInput} onFocus={()=>setSuggest(true)} onBlur={()=>setSuggest(false)}/>
                            </td>
                            <td id="button">
                                <button id="rbutton" onClick={()=>{console.log(search)}}>Search</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="suggestion" id={suggest ? "part" : ""} onMouseEnter={()=>setSuggest(true)} onMouseLeave={()=>setSuggest(false)}>
                    {
                        companydata.map((company, index) => (
                            <div id="part" onClick={()=>setSearch(company.company_name)}>
                                <p>{company.company_name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="dropdown">
                <table id="suggest">
                    <tbody>
                        <tr>
                            <td>Frequently search:</td>
                            {
                                company.slice(0,3).map((item,key) => (
                                    <td id="just">{item.company_name}</td>
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
