import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AxiosCss/EditPostAxios.css'; 
import { connect } from 'react-redux';


class EditPostAxios extends Component {
    render() {
        return (
            <div className="editPostAxios">
                <div className="header">
                    <h1 className="main-title">Edit Post : <span>{this.props.post.id}</span></h1>
                    <NavLink className="btn-back" to="/posts">Retour</NavLink>
                </div>
                <div className="editPostAxios-content">
                    <form onSubmit={this.submitHandler}>
                        <div className="group-form">
                            <label value={this.props.title} className="label" htmlFor="title" >Title :</label>
                            <input onChange={this.changeHandler} value={this.props.post.title} className="control-form" type="text" id="title"  />
                        </div>
                        <div className="group-form">
                            <label className="label" htmlFor="body">Body :</label>
                            <textarea onChange={this.changeHandler} value={this.props.post.body}  className="control-form" id="body" />
                        </div>
                        <button className="btn-edit">Edit Post</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.post_edit_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
}


export default connect(mapStateToProps)(EditPostAxios);