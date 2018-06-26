import React, { Component } from 'react';
import './header.css';

function Header() {
    return (
        <div className="item1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="./images/logodark.png" className="logo" alt="logo" /></a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Header;