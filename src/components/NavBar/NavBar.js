import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/posts">Posts</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;