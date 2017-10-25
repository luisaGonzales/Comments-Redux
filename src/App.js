import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {addComment, onChangeName, onChangeComment } from './Actions';
import {Head} from './Components';

const App = ({comments, inputName, inputComment}) =>  {
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

