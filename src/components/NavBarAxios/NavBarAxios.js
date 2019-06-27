import React, { Component } from 'react';
import './AxiosCss/NavBarAxios.css'; 
import { NavLink } from 'react-router-dom';


class NavBarAxios extends Component {
    render() {
        return (
            <div className="navBarAxios">
                <nav className="nav">
                    <ul>
                        <li><NavLink className="link" to="/">Home</NavLink></li>
                        <li><NavLink className="link" to="/posts">Posts</NavLink></li>
                        <li><NavLink className="link" to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBarAxios;