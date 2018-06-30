import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Menu</h3>
                <h2 className="panel-title">
                    Zip Code: <input type="text" />
                </h2>
                <h2 className="panel-title">
                    Search: <input type="text" />
                </h2>
                <button>Submit</button>
            </div>
            <div className="panel-body">Events</div>
        </div>
    )
}
export default Menu;