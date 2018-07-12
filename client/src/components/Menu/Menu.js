import React from 'react';
import './Menu.css';

class Menu extends React.Component {

    render() {
        return (
            < div className="panel panel-default" >
                {this.props.children}
            </div >
        )
    }
}
export default Menu;