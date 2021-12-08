import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import React, { useState } from 'react';

function App() {
    const [text, setText] = useState('');
    
    const getData = async () => {
	const data = await API.get('post', '/post')
	setText(data)
	console.log(data)
    }

    getData();
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
	  {text}
      </p>
	  
        <p>
          This is sidong-app!
      </p>
	  <input type="text" />
      </header>
    </div>
  );
}

export default App;
