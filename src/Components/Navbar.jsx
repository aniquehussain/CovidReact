import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    const underline = {
        textDecoration: 'none'
    }
    const [navColor, setNavColor] = useState("");


    function handleClick(event) {
        setScrollState("");
        setNavColor("bg-light");
    }

    let listener = null
    const [scrollState, setScrollState] = useState("bg-transparent")

    useEffect(() => {

        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "bg-light") {
                    setScrollState("bg-light")
                }
            } else {
                if (scrollState !== "bg-transparent") {
                    setScrollState("bg-transparent")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    return (<nav className={`navbar navbar-light smart-scroll navbar-expand-lg navbar-default ${scrollState} ${navColor}`}>
        <button id="toggler" className="navbar-toggler" type="button" onClick={handleClick} data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">

                {/* <Link className='nav-item' to='/' style={underline}><li className="nav-link" >Home</li></Link> */}
                {/* <Link className='nav-item' to='/statistics' style={underline}><li className="nav-link" >Statistics</li></Link> */}
                {/* <Link className='nav-item' to='/about' style={underline}><li className="nav-link" >About</li></Link> */}

            </ul>
        </div>
    </nav>)
}

export default Navbar;