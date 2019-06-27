import React, { Component } from 'react';
import './AxiosCss/HomeAxios.css'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeAxios extends Component {
    render() {
        return (
            <div className="homeAxios">
                <div className="header">
                    <h1 className="main-title">Home</h1>
                </div>
                <div className="homeAxios-content">
                    <Link className="link" to="/posts">
                        <div className="block flexing home-posts">
                            <span> Posts</span>
                            <span className="counter">5</span>
                        </div>
                        
                    </Link>
                    <Link className="link" to="/new-post">
                    <div className="block flexing home-addPost">
                            <span> New Post</span>
                            <span className="counter">+</span>
                        </div>
                    </Link>
                    <Link className="link" to="/posts">
                    <div className="block flexing home-infos">
                            <span> Info</span>
                            <span className="counter">!</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect()(HomeAxios);