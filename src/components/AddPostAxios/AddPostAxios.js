import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AxiosCss/AddPostAxios.css'; 
import { connect } from 'react-redux';


class AddPostAxios extends Component {
    render() {
        return (
            <div className="addPostAxios">
                <div className="header">
                    <h1 className="main-title">Add Post</h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="addPostAxios-content">
                    <form onSubmit={this.submitHandler}>
                        <div className="group-form">
                            <label value={this.props.title} className="label" htmlFor="title" >Title :</label>
                            <input onChange={this.changeHandler} className="control-form" type="text" id="title"  />
                        </div>
                        <div className="group-form">
                            <label className="label" htmlFor="body">Body :</label>
                            <textarea onChange={this.changeHandler}   className="control-form" id="body" />
                        </div>
                        <button className="btn-add">Add Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(AddPostAxios);