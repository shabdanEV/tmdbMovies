import React, {useRef, useState} from "react";
import logo from './../../assets/img/logoo.svg'
import {NavLink, useNavigate,Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import './header.scss'

function Header({mode, handleMode}) {
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const handleClick = (name) => {
        navigate(`/detail/${name}`)
        inputRef.current.value = ""
    }
    const handleChange = (e) => {
        switch (e.key) {
            case "Enter" : navigate(`/detail/${value}`)
        }

    }
    const inputRef = useRef()
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--nav">
                        <Link to={'/'}>
                            <img src={logo} alt=""/>
                        </Link>

                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/top-rated'}>Top Rated</NavLink>
                    </div>

                    <div className="header--search">
                        <input ref={inputRef} onKeyDown={handleChange} onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search..."/>
                        <FaSearch onClick={() => handleClick(value)} className="header--search__icon"/>
                        <div className="header--btn">
                            <button style={{
                                background: mode ? "black" : "white"
                            }} onClick={() => handleMode(mode)}
                                    className="header--btn__one">{mode ? "white" : "black "} </button>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Header