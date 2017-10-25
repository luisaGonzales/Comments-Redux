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
                    </form>
                </Col>
            </Row>
        </div>
    );
}
