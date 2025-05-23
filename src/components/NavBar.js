import { Link } from "react-router-dom";
import React, { useContext,useState } from 'react'
import { SearchContext } from "../context/SearchContext";
import './Navbar.css'


const NavBar = () => {
    const [inputValue, setInputValue] = useState('');

    const obj = useContext(SearchContext);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        obj.setSearchTerm(inputValue);
        setInputValue('') ;
    }
    return (
        <nav className="navbar navbar-expand " style={{ backgroundColor: '#5D3C64', height: '50px' }}>
            <div className="container-fluid" >
                <img style={{ height: '32px', width: '32 px', marginRight: '7px' }} id="logo"  src="logo.png" alt="" />
                <Link className="navbar-brand" to="/top" style={{ color: 'white' }} id="logoName">NewsNexus</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navigate" aria-current="page" to="/top" style={{ color: 'white' }}>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link navigate" to="/about" style={{ color: 'white' }}>About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" style={{ width: '235px' }} type="search" placeholder="Search for any keyword...." aria-label="Search" id="searchBox" value={inputValue} onChange={handleChange} />
                        <button className="btn btn-outline-success" type="submit" id="searchBtn">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
