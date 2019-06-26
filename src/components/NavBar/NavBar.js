import React, { Component } from 'react';
import './css/NavBar.css';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
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

export default NavBar;