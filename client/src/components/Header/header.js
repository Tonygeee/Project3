import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="item1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img id="headerLogo" src="./images/logodark.png" className="logo" alt="logo" />
                <div id="searching">
                    <form className="form-inline my-2 my-lg-0">
                        <div id="signOutDiv">
                            <button id="signOutBtn" onClick={localStorage.clear()}
                                type="button" class="btn btn-secondary">Sign Out</button>

                        </div>
                    </form>
                </div>
            </nav>
        </div >
    )
}

export default Header;