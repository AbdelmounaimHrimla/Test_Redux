import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';

class Posts extends Component {
    
    render() {
        console.log(this.props);
        const {posts} = this.props;
        const myPosts = posts.length ? (
            posts.map(post => {
                return (
                    
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button><NavLink to={'/' + post.id}>Show</NavLink></button>
                        </td>
                    </tr>
                    
                )
            })
        ) : (
            <tr>
                <td>No Post :( </td>
            </tr>
        )
        return (
            <div className="posts">
                <div className="headre">
                    <h1 className="main-title">Posts</h1>
                    <button><NavLink to="/new-post">+ Add New Post</NavLink></button>
                </div>
                <div className="content">
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>Body</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                    <tbody>
                        {myPosts}
                    </tbody>
            </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}


export default connect(mapStateToProps)(Posts);