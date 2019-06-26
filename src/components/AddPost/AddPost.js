import React, { Component } from 'react';
import './css//AddPost.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class AddPost extends Component {
    changeHandler = (event) => {
        console.log("VVVVV");
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log("HHHHHHHHH " + this.props.addPost(this.props.id, this.props.title, this.props.body));
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
const mapStateToProps = (state) => {
    return {
        id : state.id,
        title : state.title,
        body : state.body
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : (id, title, body) => {dispatch(addPost(id, title, body))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);