import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import {addComment, removeComment} from './Actions';
import {Comment} from './Components';

const App = ({ comments }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if(this.name.value && this.comment.value){
      addComment(this.name.value, this.comment.value);
      this.name.value = '';
      this.comment.value = '';
    }
  }
  return (
    <Grid className='box'>
      <div className='comments'>
        <h3 className='titles'>NEW COMMENT</h3>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <InputGroup className="inputs name">
              <FormControl type="text" placeholder="Name" inputRef={ref => { this.name = ref }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="inputs">
              <FormControl componentClass='textarea' type="text" placeholder="Comment" inputRef={ref => { this.comment = ref }} />
            </InputGroup>
          </FormGroup>
          <Button type="submit" id='post'>
            Post Comment
          </Button>
        </form>
      </div>
      <div className=''>
        <h3>
          <span><strong>Comments</strong></span>
        </h3>
        <p className="counter">{comments.length} comments</p>
        <div>
          {
            comments.map((item, index) => <Comment key={index} name={item.name} comment={item.comment} index={index} />)
          }
        </div>
      </div>
    </Grid>
  );
}

const mapToPlay = ({comments}) => ({comments})
export default connect(mapToPlay)(App);

