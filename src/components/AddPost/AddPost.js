import React, { Component } from 'react';
import './css//AddPost.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class AddPost extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        console.log("HHHHHHHHH " + this.props.addPost(this.props.post));
    }

    render() {
        return (
            <div className="addPost">
                <div className="header">
                    <h1 className="main-title">Add Post</h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="addPost-content">
                    <form onSubmit={this.submitHandler}>
                        <div className="group-form">
                            <label className="label" htmlFor="title">Title :</label>
                            <input className="control-form" type="text" id="title"  />
                        </div>
                        <div className="group-form">
                            <label className="label" htmlFor="body">Body :</label>
                            <textarea className="control-form" id="body" />
                        </div>
                        <button className="btn-add">Add Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : (post) => {dispatch(addPost(post))}
    }
}

export default connect(null, mapDispatchToProps)(AddPost);