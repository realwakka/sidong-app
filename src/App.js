import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const addPost = async (text) => {
    const params = {
      headers: {},
      response: true,
      queryStringParameters: {
	name: 'unknown',
	content: text,
      },
    };
    const result = await API.post('post', '/post', params);
    console.log(result);
  }

  const getPost = async () => {
    const result = await API.get('post', '/post');
    setText(result.message);
  }

  // addPost('sample');
  getPost();
  return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      {text}
    </p>
      <input type="text" />
      </header>
      </div>
  );
}

export default App;
