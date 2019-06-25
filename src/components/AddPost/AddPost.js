import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class AddPost extends Component {

    render() {
        return (
            <div className="addPost">
                <div className="header">
                    <h1>Add Post</h1>
                    <button><NavLink to="/posts">Retour</NavLink></button>
                </div>
                <div className="content">
                    <form>
                        <div>
                            <label htmlFor="title">Title :</label>
                            <input type="text" id="title"  />
                        </div>
                        <div>
                            <label htmlFor="body">Body :</label>
                            <textarea id="body" />
                        </div>
                        <button>Add Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(AddPost);