import React from 'react';
import './comment.css';
import axios from 'axios';

var Comment = React.createClass({


	getInitialState: function() {
		return ({
			comments: [],
			cite: {}
		});
	},
	handleClick: function(e) {
		if(e.target.nodeName==="SPAN"){
			this.setState({
				cite: {
					title: e.target.parentNode.childNodes[0].innerText,
					content: e.target.parentNode.childNodes[1].innerText
				}
			});
		}else{
			this.setState({
				cite: {
					title: e.target.childNodes[0].innerText,
					content: e.target.childNodes[1].innerText
				}
			});
		}
	},
	componentDidUpdate: function(){
		this.state.cite={};
		axios.get("http://localhost:3090/api/post/get/5b7c4f00926c590a2e34e739")
		.then(response => {
            console.log(response.data);
        })
	},

	getComment: function(title, content) { //get comment
		var comment = {};
		comment.title = title;
		comment.content = content;
		this.state.comments.unshift(comment);
		this.setState();
	},
	render: function() {
		var temp = [];
		var cs = this.state.comments;
		for (var i = 0; i < cs.length; i++) {
			temp.push(<li key={i} title="" onClick={this.handleClick}><span className="title_sp" ref="_sp">{cs[i].title+": "}</span><span className="content_sp" ref="content_sp">{cs[i].content}</span></li>);
		}
		return (
			<div className="wrap">
				<ul>
					{temp}
				</ul>
				<CommentInput submitComment={this.getComment} citeName={this.state.cite.name} citeContent={this.state.cite.content}></CommentInput>
			</div>
		);
	}
});

var CommentInput = React.createClass({
// 	componentWillReceiveProps: function(nextProps) {
// 		if(nextProps.citeName&&nextProps.citeContent){

// 		console.log("will props");
// 			this.refs.comment_in.innerText="\n"+"    引用："+"\n"+"            "+nextProps.citeName+nextProps.citeContent;
// 			this.refs.comment_in.focus();
// 		}
// 	},
	handleFocus: function(e) {
		if (e.target.innerText === 'Leave your comment here') {
			e.target.innerText = '';
		}
	},
	handleBlur: function(e) {
		if (e.target.innerText === '') {
			e.target.innerText = 'Leave your comment here';
		}
	},

	handleSubmit: function() {
		axios.post('')
	},

	render: function() {
		return (
			<div>
				<input placeholder="title" ref="title" id="title"/>
				<div onFocus={this.handleFocus} onBlur={this.handleBlur} className="comment_in" ref="comment_in" contentEditable="true">Leave your comment here</div>
				<div>
				<button className="submit_btn" onClick={this.handleSubmit}>submit</button>
				</div>
			</div>
		);
	}
});

export default Comment
