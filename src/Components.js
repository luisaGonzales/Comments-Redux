import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

export const Head = ({title, addComment, onChangeName, onChangeComment }) => {
    return (
        <div>
            <Row className="text-center">
                <Col md={12}>
                    <h1>{title}</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <form onSubmit={addComment}>
                    <input 
                        type="text"
                        placeholder="addName"
                        onChange={onChangeName}/>
                    <input 
                        type="text"
                        placeholder="addComment"
                        onChange={onChangeComment}/>
                    <button 
                        type="submit"
                        >
                    Post Comment
                    </button>
                    </form>
                </Col>
            </Row>
        </div>
    );
}

export const CommentList = ({comments}) => {
    return (
        comments.map((comment, index) => {
            return (
                <Comment />
            );
        })

    );
}

const Comment = ({userName, userComment}) => {
    return (
        <div>
            <Row>
                <Col md={2}>
                    <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png"/>
                </Col>
                <Col md={10}>
                    {userName}
                </Col>
                <Col md={10}>
                    {userComment}
                </Col>
            </Row>
            <Row>
                <a>Delete Comment</a>
                <a>Report as abuse</a>
            </Row>
        </div>
    );
}