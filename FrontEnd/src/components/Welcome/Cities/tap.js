import React from "react"
import TabsControl from "./cities.js"
import A1 from './a1.jpg';
import A2 from './a2.jpg';
import A3 from './a3.jpg';
// import CommentApp from '../Posts/CommentApp';
import Comment from './comment.js';
import './cities.css';
import UserPost from'./UserPost.js';
import axios from 'axios';
import NewPost from'./newPost.js';

class TabComponent extends React.Component{

	state = {
		posts: []
	}

	addPost = (newPost) => {
		newPost.preventDefault();
		let posts = this.state.posts.push(newPost);
		this.setState({posts: posts});
	}
	
	componentDidMount = () => {
		axios.get('http://localhost:3090/api/posts/get')
        .then(response => {
            console.log(response);
            this.setState({posts: response.data})
        })
	}

	render(  ){
		let sfPosts, lonPosts, nyPosts, userCanEdit=false;
		let userId = localStorage.getItem('userId');

		if(this.state.posts){
			sfPosts = this.state.posts.map(post => {
				// console.log('userId', post.user[0])
				if(post.user[0] === userId)
					userCanEdit = true;
				else
					userCanEdit = false;

				if(post.location === 'SF'){
					return(
						<UserPost key={post._id} post={post} userCanEdit={userCanEdit}/>	
					)
				}
			})

			lonPosts = this.state.posts.map(post => {
				if(post.user[0] === userId)
					userCanEdit = true;
				else
					userCanEdit = false;

				if(post.location === 'London'){
					return(
						<UserPost key={post._id} post={post} userCanEdit={userCanEdit}/>	
					)
				}
			})

			nyPosts = this.state.posts.map(post => {
				if(post.user[0] === userId)
					userCanEdit = true;
				else
					userCanEdit = false;

				if(post.location === 'NY'){
					return(
						<UserPost key={post._id} post={post} userCanEdit={userCanEdit} className="newPost"/>	
					)
				}
			})
		}

		return(	
			<div className="post">			
				<TabsControl>					
					<div name="SF" className="SF">
					<h3 className="p center">SF</h3>
					<h4 className="p center">UNITED STATES</h4>
					<img src={A1} className="img-responsive"  alt="img"  align="right"/>
					<hr/>
					<NewPost addPost={this.addPost} city={'SF'} />
					<hr/>
					{sfPosts}
					</div>					
			
					<div name="LONDON">
					<h3 className="p">LONDON</h3>
					<h4 className="p">ENGLAND</h4>
					<img src={A2} className="img-responsive" alt="img"/>
					<hr/>
					<NewPost addPost={this.addPost} city={'London'}/>
					<hr/>
					{lonPosts}
					</div>

					<div name="NEWYORK">
					<h3 className="p">NEWYORK</h3>
					<h4 className="p">UNITED STATES</h4> 
					<img src={A3} className="img-responsive" alt="img"/>
					<hr/>
					<NewPost addPost={this.addPost} city={'NY'}/>
					<hr/>
					{nyPosts}
					</div>	
					
				</TabsControl>
				
			</div>
			
		)
	}
}

export default TabComponent