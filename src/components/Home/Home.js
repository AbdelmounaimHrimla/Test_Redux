import React, { Component } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {

    render() {
        const {posts} = this.props;
        const cmp = posts.length;
        return (
            <div className="home">
                <div className="header">
                    <h1 className="main-title">Home</h1>
                </div>
                <div className="home-content">
                    <Link className="link" to="/posts">
                        <div className="block flexing home-posts">
                            <span> Posts</span>
                            <span className="counter">{cmp}</span>
                        </div>
                        
                    </Link>
                    <Link className="link" to="/new-post">
                    <div className="block flexing home-addPost">
                            <span> New Post</span>
                            <span className="counter">+</span>
                        </div>
                    </Link>
                    <Link className="link" to="/posts">
                    <div className="block flexing home-infos">
                            <span> Info</span>
                            <span className="counter">!</span>
                        </div>
                    </Link>
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

export default connect(mapStateToProps)(Home);