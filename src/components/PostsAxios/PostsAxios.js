import React, { Component } from 'react';
import './AxiosCss/PostsAxios.css'; 
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class PostsAxios extends Component {
    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            const posts = response.data;
            console.log(posts);
            // Hena Mabatch t3mer Had Array 
            console.log( this.props.posts);
            console.log("Che7al mn Items kayn => " + posts.length);
        });
        console.log("Hadi khasha tkhdem o tle3 M3a DidMount");
    }

    componentDidMount() {
        this.getPosts();
    }

    listPosts = (post) => {
        return (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>Here</td>
            </tr>
        ) 
    } 
    
    render() {
        const myPosts = this.props.posts.map(this.listPosts);
        return (
            <div className="postsAxios">
                <div className="header">
                    <h1 className="main-title">Posts</h1>
                    <NavLink className="btn-new" to="/new-post">+ Add New Post</NavLink>
                </div>
                <div className="search-bar">
                    <div className="searching">
                        <label htmlFor="search">Search :</label>
                        <input type="search" id="search" onChange={this.filterList}/>
                    </div>
                    <div className="navigate">
                        <span className="navigation">First</span>
                        <span className="navigation">Next</span>
                        <span className="navigation">Prev</span>
                        <span className="navigation">Last</span>
                    </div>
                </div>
                <div className="postsAxios-content">
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

export default connect(mapStateToProps)(PostsAxios);