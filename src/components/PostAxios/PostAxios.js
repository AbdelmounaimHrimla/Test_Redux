import React, { Component } from 'react';
import './AxiosCss/PostAxios.css'; 
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActionsAxios';
import axios from 'axios';


class PostAxios extends Component {

    deleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
        this.props.history.push('/posts');
        /*this.props.deletePost(this.props.post.id);
        console.log("ID > " + this.props.post.id);
        console.log("TITLE > " + this.props.post.title);
        console.log("BODY > " + this.props.post.body);*/
        
    }


    render() {
        return (
            <div className="postAxios">
                <div className="header">
                    <h1 className="main-title">Post</h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="postAxios-content">
                    <div className="card">
                    <span className="id-post">{this.props.post.id}</span>
                    <h2>{this.props.post.title}</h2>
                    <p>{this.props.post.body}</p>
                    <button className="btn-delete" onClick={this.deleteHandler}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
}


/*const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(PostAxios);