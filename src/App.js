import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listPosts, listComments, postByName, postByTypeAndCreated, commentByPostAndCreated } from './graphql/queries'
import { createPost, createComment } from './graphql/mutations'

function AddPost() {
    const [text, setText] = useState('');

    const addPost = async (content) => {
	console.log('posting ' + content);
	const result = await API.graphql(graphqlOperation(createPost, {input: {
	    name: 'unknown',
	    content: content,
	    created: new Date().toISOString(),
	    type: 'post'
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
  const [commentVisible, setCommentVisible] = useState(false);
  const toggleComment = (e) => {
    setCommentVisible(!commentVisible);
  };
    
  
    return (
	    <div border="1px solid black" className="Post">
	<p> {props.name} : {props.content} </p>
	<button onClick={toggleComment}> toggle </button>	
	{commentVisible &&
	 <Comment key={props.id} postId={props.id}/>}
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
	    postId: props.postId,
	    created: new Date().toISOString(),
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
	    comment!
	</button>
	    </div>
    );
}


function Comment(props) {
  const [commentList, setCommentList] = useState([]);

    
    useEffect(() => {
	const getComments = async () => {
	    console.log('get comment post id : ' + props.postId);
	    const res = await API.graphql({query:commentByPostAndCreated, variables: {
		postId: props.postId,
		created: {lt: new Date().toISOString()},
		sortDirection: 'DESC'
	    }});
	    
	    console.log(res);
	    const comments = res.data.commentByPostAndCreated.items
	    const list = comments.map(
		(comment) => <p> {comment.content} </p>);
	    setCommentList(list);
	};
	
	getComments();
    }, []);

    return (
	<div className="Comment">

	{commentList}
	 <AddComment key={props.postId} postId={props.postId}/>
      </div>
    );
}


function App() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
	const getPosts = async () => {
	    //const res = await API.get('post', '/post');
	    // const res = await API.graphql({query:listPosts, variables: {filter:{}}});
	    const res = await API.graphql({query:postByTypeAndCreated, variables: {
		type: 'post',
		created: {lt: new Date().toISOString()},
		sortDirection: 'DESC'
	    }});	    
	    console.log(res);	    
	    const posts = res.data.postByTypeAndCreated.items
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
