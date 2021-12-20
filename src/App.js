import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { postByBoardAndCreated, commentByPostAndCreated, listBoards } from './graphql/queries'
import { createBoard, createPost, createComment } from './graphql/mutations'
import * as subscriptions from './graphql/subscriptions';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function AddPost(props) {
  const [text, setText] = useState('');
  const addPost = async (content, boardId) => {
    console.log('posting ' + content + boardId); 
    const result = await API.graphql(graphqlOperation(createPost, {input: {
      name: 'unknown',
      content: content,
      created: new Date().toISOString(),
      boardId: boardId
    }}));
    console.log(result);
    window.location.reload();    
  }
  
  const onClickSubmit = (e, boardId) => {
    console.log("boardId on click" + boardId);
    addPost(text, boardId);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  
  return (
      <div className="AddPost"> <input value={text} type="text" onChange={onChange}/> <button onClick={(e) => onClickSubmit(e, props.boardId)}> post! </button> </div>
  );
}

function Post(props) {
  const [commentVisible, setCommentVisible] = useState(false);
  const toggleComment = (e) => {
    setCommentVisible(!commentVisible);
  };

  const buttonStyle = "height: 26px;";
  return (
      <div>
      <div className="Post">
      <p> {props.name} : {props.content} </p>
      <button onClick={toggleComment}> {commentVisible ? "close" : "open"} </button>
      </div>
      <div>
      {commentVisible &&
       <Comment key={props.id} postId={props.id}/>}
    </div>
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
    // window.location.reload();
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
    
    // getComments();

    
    const subscribeComments = async () => {
      const subscription = await API.graphql(
	graphqlOperation(subscriptions.onCreateComment)
      ).subscribe({
	next: (data) => console.log(data),
	error: error => console.warn(error)
      });
    };

    subscribeComments();
    
  }, [props]);


  return (
      <div className="Comment">

    {commentList}
      <AddComment key={props.postId} postId={props.postId}/>
      </div>
  );
}

function Board(props) {
  const [state, setState] = useState({
    boardId: '',
    postList: []
  });
  useEffect(() => {
    const getPosts = async (boardId) => {
      if (!boardId) {
	const res = await API.graphql({query:listBoards, variables: {}});
	console.log(res);	    
	const boards = res.data.listBoards.items;
	if (boards.length > 0) {
	  boardId = boards[0].id;
	}
      }
      console.log("Board props" + boardId);
      const res = await API.graphql({query:postByBoardAndCreated, variables: {
	boardId: boardId,
	created: {lt: new Date().toISOString()},
	sortDirection: 'DESC'
      }});	    
      console.log(res);	    
      const posts = res.data.postByBoardAndCreated.items;
      const list = posts.map(
	(post) => <Post key={post.id} id={post.id} name={post.name} content={post.content} />);
      setState({boardId: boardId, postList: list});
    };
    getPosts(props.id);
  }, [props]);
  
  return (
      <div className="Board">
      <AddPost boardId={state.boardId}/>
      {state.postList}
    </div>
  );
}

function BoardList(props) {
  const [boardList, setBoardList] = useState([]);

  const onClickButton = (id, e, props) => {
    console.log(id);
    props.updateBoardId(id);
  };

  useEffect(() => {
    const getBoards = async () => {
      const res = await API.graphql({query:listBoards, variables: {
      }});	    
      console.log(res);	    
      const boards = res.data.listBoards.items;
      const list = boards.map(
	(board) => <td key={board.id}> <button onClick={
	  (e) => onClickButton(board.id, e, props)}>{board.name}</button> </td>);
      setBoardList(list);
    };
    getBoards();
  }, [props]);
  
  return (<div className="BoardList"><table><tbody><tr>{boardList}</tr></tbody></table></div>);
}

function AddBoard() {
  const [boardName, setBoardName] = useState([]);

  const addBoard = async (name) => {
    console.log('boarding ' + name);
    const result = await API.graphql(graphqlOperation(createBoard, {input: {
      name: name,
      created: new Date().toISOString()
    }}));
    console.log(result);
    window.location.reload();    
  }
  
  const onClickSubmit = (e) => {
    console.log('onClick!');
    addBoard(boardName);
    setBoardName('');
  };

  const onChange = (e) => {
    setBoardName(e.target.value);
  };

  return (
      <div className="AddBoard"> <input value={boardName} type="text" onChange={onChange}/> <button onClick={onClickSubmit}> create board! </button> </div>
  );
}

function App(props) {
  const [boardId, setBoardId] = useState('');
  
  return (
      <div className="App">
      <div>
      <AddBoard />
      <BoardList updateBoardId={setBoardId} />
      </div>
      <Board id={boardId}/>
      </div>
  );
}

export default App;
