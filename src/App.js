import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import React, { useState, useEffect } from 'react';

function AddPost() {
    const [text, setText] = useState('');

    const addPost = async (content) => {
	console.log('posting ' + content);
	const result = await API.post('post', '/post', {
	    body: {
		name: 'unknown',
		content: content
	    }
	});
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
	    <p> {props.name} : {props.content} </p>
    );
}


function App() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
	const getPosts = async () => {
	    const res = await API.get('post', '/post');
	    console.log(res);
	    const list = res.data.Items.map(
		(post) => <Post key={post.id.S} name={post.name.S} content={post.content.S} />);
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
