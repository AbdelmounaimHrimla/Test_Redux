import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AxiosCss/AddPostAxios.css'; 
import { connect } from 'react-redux';
import axios from 'axios';
import { setPosts } from '../../actions/postActionsAxios';



class AddPostAxios extends Component {
    changeHandler = (event) => {
        this.props.setPosts({
            posts : event.target.value
        });
    }
    addPostHandler = () => {
        const data = {
            title : this.props.title,
            body : this.props.body,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log(response);
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
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
                            <input onChange={this.changeHandler} value={this.props.posts.title}  className="control-form" type="text" id="title"  />
                        </div>
                        <div className="group-form">
                            <label className="label" htmlFor="body">Body :</label>
                            <textarea onChange={this.changeHandler} value={this.props.posts.body}  className="control-form" id="body" />
                        </div>
                        <button onClick={this.addPostHandler} className="btn-add">Add Post</button>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts : state.posts,
        title : state.title,
        body : state.body,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts : (posts) => {dispatch(setPosts(posts))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostAxios);