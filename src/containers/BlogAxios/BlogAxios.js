import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarAxios from '../../components/NavBarAxios/NavBarAxios';
import HomeAxios from '../../components/HomeAxios/HomeAxios';
import PostsAxios from '../../components/PostsAxios/PostsAxios';
import AddPostAxios from '../../components/AddPostAxios/AddPostAxios';
import PostAxios from '../../components/PostAxios/PostAxios';
import './AxiosCss/BlogAxios.css'; 
import EditPostAxios from '../../components/EditPostAxios/EditPostAxios';


class BlogAxios extends Component {

    render() {
        return (
            <div className="blogAxios">
                <NavBarAxios />
                <div className="content">
                    <Switch>
                        <Route path="/" component={HomeAxios} exact/>
                        <Route path="/posts" component={PostsAxios} />
                        <Route path="/new-post" component={AddPostAxios} />
                        <Route path="/post/:post_id" component={PostAxios} />
                        <Route path="/:post_edit_id" component={EditPostAxios} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default BlogAxios;