import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {addComment, onChangeName, onChangeComment } from './Actions';
import {Head} from './Components';

const App = ({ comments }) => {
  const todoList = comments.map((comment, index) => {
    return(
      <li key={index}> {comment.text} </li>
    );
});

  const onSubmit = e => {
     e.preventDefault();
     addTodo(this.refInput.value);
  };
  return (
     <div className="wrapper">
        <header>
           <h1>RSVP</h1>
           <p> Registration App </p>
           <form onSubmit={onSubmit}>
              <input
                 type="text"
                 name="name"
                 placeholder="Invite Someone"
                 ref={e => (this.refInput = e)}
              />
              <button type="submit" name="submit" value="submit">
                 Submit
              </button>
           </form>
        </header>
        <div className="main">
           <h2>Invitees</h2>
           <ul id="invitedList">{todoList}</ul>
        </div>
     </div>
  );
};

const App = ({comments, inputName, inputComment}) =>  {
  const commentList = comments.map (comment => <>)
  return (
    <Grid>
      <Row>
        <Col mdOffset={3} md={7}>
          <Head title="New Comment" addComment={addComment} onChangeName={onChangeName} onChangeComment={onChangeComment}/>
        </Col>
      </Row>
    </Grid>
  );
}

const mapToPlay = ({comments, inputName, inputComment }) => ({comments, inputName, inputComment})
export default connect(mapToPlay)(App);

