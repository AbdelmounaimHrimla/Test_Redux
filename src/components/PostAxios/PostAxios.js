import React, { Component } from 'react';
import './AxiosCss/PostAxios.css'; 
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class PostAxios extends Component {
    render() {
        return (
            <div className="postAxios">
                <div className="header">
                    <h1 className="main-title">Post</h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="postAxios-content">
                    <div className="card">
                        <h2>Title</h2>
                        <p>Body</p>
                        <button className="btn-delete">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(PostAxios);