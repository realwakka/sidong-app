import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listPosts, listComments } from './graphql/queries'
import { createPost, createComment } from './graphql/mutations'

function AddPost() {
    const [text, setText] = useState('');

    const addPost = async (content) => {
	console.log('posting ' + content);
	const result = await API.graphql(graphqlOperation(createPost, {input: {
	    name: 'unknown',
	    content: content,
	    created: new Date().toISOString()
	}}));
	console.log(result);
	window.location.reload();    
    }
    
    const onClickSubmit = (e) => {
	console.log('onClick!');
	addPost(text);
	setText('');

    };

    const onChange = (e) => {
	setText(e.target.value);
    };
    
    return (
	    <div className="AddPost">
	    <input value={text} type="text" onChange={onChange}/>
	    <button onClick={onClickSubmit}>
	    submit!
	</button>
	    </div>
    );
}

function Post(props) {
    return (
	<div className="Post">
	    <p> {props.name} : {props.content} </p>
	    <Comment postId={props.id}/>
	    </div>
    );
}

function AddComment(props) {
    const [text, setText] = useState('');
    const addComment = async (content) => {
	console.log('commenting ' + content + props.postId);
	const result = await API.graphql(graphqlOperation(createComment, {input: {
	    name: 'unknown',
	    content: content,
	    created: new Date().toISOString(),
	    post: {id: props.postId}
	}}));
	console.log(result);
	window.location.reload();    
    }
    
    const onClickSubmit = (e) => {
	console.log('onClick!');
	addComment(text);
	setText('');

    };

    const onChange = (e) => {
	setText(e.target.value);
    };
    
    return (
	    <div className="AddComment">
	    <input value={text} type="text" onChange={onChange}/>
	    <button onClick={onClickSubmit}>
	    submit!
	</button>
	    </div>
    );
}


function Comment(props) {
    const [commentList, setCommentList] = useState([]);
    
    const getComments = async () => {
	const res = await API.graphql(graphqlOperation(listComments))
	console.log(res);	    
	const comments = res.data.listComments.items
	const list = comments.map(
	    (comment) => <p> {comment.content} </p>);
	setCommentList(list);
    };

    useEffect(() => {
	getComments();
    }, []);
    
    return (
	    <div className="Comment">
	    <AddComment postId={props.postId}/>
	    </div>
    );
}


function App() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
	const getPosts = async () => {
	    //const res = await API.get('post', '/post');
	    const res = await API.graphql(graphqlOperation(listPosts))
	    console.log(res);	    
	    const posts = res.data.listPosts.items
	    const list = posts.map(
		(post) => <Post key={post.id} id={post.id} name={post.name} content={post.content} />);
	    setPostList(list);
	};
	getPosts();
    }, []);
    
    return (
	    <div className="App">
	    <AddPost/>	  
	    {postList}
	    </div>
    );
}

export default App;
