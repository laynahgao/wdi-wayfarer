import React from 'react';
import axios from 'axios';
import './cities.css'

class UserPost extends React.Component {

    state = {
        editing: false,
        post: {},
        deleted: false
    }

    // componentDidMount = () => {  
    //     let postid = localStorage.getItem('post') 
    //     console.log('post', JSON.stringify(postid));
        
    // }

    editPost = (event) => {
        this.setState({
            editing: true,
        })
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value,
            editing: true
        })
    }

    handleSubmit = () => {

        axios.put('http://localhost:3090/api/put/post/'+this.props.post._id, {
            title: this.state.title,
            detail: this.state.detail,
            date: this.state.date,
        
        })
        .then(response => {
            this.setState({
                post: response.data,
                editing: false
            })
        })
    }

    deletePost = () => {
        axios.delete('http://localhost:3090/api/delete/post/' + this.props.post._id)
        .then(response => {
            console.log(response.data);
            this.setState({
                post: {},
                editing: false,
                deleted: true
            })
        })
    }

    render(){
        return(
            <div id="postModal" >
                <div className="modalContent">
                    {/* <span className="close">&times;</span> */}
                    <div id="userPost">
                    </div >
                    <div className="newPost">   
                    {
                        this.state.editing
                        ? 
                        <input className="newPostTitle" onChange={this.handleChange} name="title" value={this.state.name} type="text" placeholder="title" pattern=".{1,}"   required title="1 characters minimum"/>
                        
                        : <p className="newPostTitle" >Title:{this.state.post.title?this.state.post.title:this.props.post.title}</p>
                        
                    }
                    {
                        this.state.editing
                        ? 
                        <input onChange={this.handleChange} name="detail" value={this.state.detail} type="text" placeholder="detail" pattern=".{1,}"   required title="1 characters minimum"/>
                        
                        : <p>Detail:{this.state.post.detail && this.state?this.state.post.detail:this.props.post.detail}</p>
                    }
                    {
                        this.state.editing
                        ? <button type="submit" name="submit" id="submit" onClick={this.handleSubmit}>submit</button>
                        : this.props.userCanEdit ? 
                            <button type="submit" name="edit" id="edit" onClick={this.editPost}>Edit</button>
                            : null
                    }
                     <p>{this.state.post.date}</p>                 

                    {
                        this.state.editing
                        ? <button type="submit" name="submit" id="delete" onClick={this.deletePost}>Delete</button>                   
                        : null
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPost