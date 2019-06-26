import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/Posts.css';
import { nextPage, prevPage, firstPage, lastPage } from '../../actions/postActions';


class Posts extends Component {
     
    nextPageHandler = () => {
        if(this.props.lengthPosts === this.props.endSliced) {
            this.firstPageHandler();
        } else {
            this.props.nextPage(this.props.statrSliced, this.props.endSliced);
        }
        
    }
    prevPageHandler = () => {
        this.props.prevPage(this.props.statrSliced, this.props.endSliced);
    }
    firstPageHandler = () => {
        this.props.firstPage(this.props.statrSliced, this.props.endSliced);
    }
    lastPageHandler = () => {
        console.log("WWWW "+this.props.endSliced);
        
        this.props.lastPage(this.props.statrSliced, this.props.endSliced);
    }
    render() {
        console.log(this.props);
        const {posts, startSliced, endSliced} = this.props;
        const slicedPost = posts.slice(startSliced, endSliced);
        console.log("FFFF " + posts.length);
        console.log("DDDD " + slicedPost);
        const myPosts = slicedPost.length ? (
            slicedPost.map(post => {
                return (
                    
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body.substring(0, 50)}</td>
                        <td>
                            <NavLink className="btn-show" to={'/' + post.id}>Show</NavLink>
                        </td>
                    </tr>
                    
                )
            })
        ) : (
            <tr>
                <td className="no-post" colSpan="4">No Post :( </td>
            </tr>
        )
        return (
            <div className="posts">
                <div className="header">
                    <h1 className="main-title">Posts</h1>
                    <NavLink className="btn-new" to="/new-post">+ Add New Post</NavLink>
                </div>
                <div className="search-bar">
                    <div className="searching">
                        <label htmlFor="search">Search :</label>
                        <input type="search" id="search" />
                    </div>
                    <div className="navigate">
                        <span className="navigation" onClick={this.firstPageHandler}>First</span>
                        <span className="navigation" onClick={this.nextPageHandler}>Next</span>
                        <span className="navigation" onClick={this.prevPageHandler}>Prev</span>
                        <span className="navigation" onClick={this.lastPageHandler}>Last</span>
                    </div>
                </div>
                <div className="posts-content">
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
        posts : state.posts,
        startSliced : state.startSliced,
        endSliced : state.endSliced,
        lengthPosts : state.lengthPost,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextPage : (startSliced, endSliced) => {dispatch(nextPage(startSliced, endSliced))},
        prevPage : (startSliced, endSliced) => {dispatch(prevPage(startSliced, endSliced))},
        firstPage : (startSliced, endSliced) => {dispatch(firstPage(startSliced, endSliced))},
        lastPage : (startSliced, endSliced) => {dispatch(lastPage(startSliced, endSliced))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);