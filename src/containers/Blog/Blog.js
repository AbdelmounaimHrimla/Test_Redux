import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import Posts from '../../components/Posts/Posts';
import Post from '../../components/Post/Post';
import AddPost from '../../components/AddPost/AddPost';

class Blog extends Component {

    render() {
        return (
            <div className="blog">
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={AddPost} />
                    <Route path="/:post_id" component={Post} />
                    
                </Switch>
            </div>
        );
    }
}

export default Blog;