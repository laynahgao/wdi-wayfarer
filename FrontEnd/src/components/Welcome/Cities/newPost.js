import React from 'react';
import axios from 'axios';
import './cities.css'

class NewPost extends React.Component {

    addPost = (event) => {
        let email = localStorage.getItem('user');

        axios.post('http://localhost:3090/api/post/post/'+email, {
            title: this.refs.title.value,
            detail: this.refs.detail.value,
            location: this.props.city,
            // date: this.refs.date.value
        })
        .then(response => {
            console.log('addPost', response.data)
            this.props.addPost(response.data);
        })
      }
      
    render(){
        console.log('in render')
        return(
            <div id="newPostModal" >
                <div className="modalContent">
                    <div id="newPost">
                    </div>

                    <form id="addPostForm" onSubmit={this.addPost}>
                    <p className="newPostTitle"> Post Your Tips Here:</p>
                    <div className="br"></div>
                    <input type="text" ref="title" placeholder="Title" pattern=".{1,}"   required title="1 characters minimum"/>
                    <div className="br"></div>
                    <textarea type="text" ref="detail" placeholder="Detail" pattern=".{1,}"   required title="1 characters minimum"/>
                    <div className="br"></div>
                    {/* <input type="date" ref="date" placeholder="Date" pattern=".{1,}"  required title="1 characters minimum"/> */}
                    <button type="submit" name="submit" id="Add"> submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewPost