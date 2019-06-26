import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import './css/Post.css';


class Post extends Component {
    deleteHandler = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/posts');
    }
    render() {
        
        console.log(this.props);
        const post = this.props.post ? (
            <div className="card">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <button className="btn-delete" onClick={this.deleteHandler}>Delete</button>
            </div>
        ) : (
            <div>Post Is Coming...</div>
        )
        return (
            <div className="post">
                <div className="header">
                    <h1 className="main-title">Post</h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="post-content">
                    {post}
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);