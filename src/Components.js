import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {removeComment} from './Actions'

export const Comment = ({name, comment, index}) => {
    return (
        <div className='caja comentario'>
            <Row>
                <Col md={2} sm={3} xs={4} className='text-center'>
                    <img src="https://inexus.eu/themes/resurrection/images/avatar/3.png" width="100px"/>
                </Col>
                <Col md={10} sm={9} xs={8}>
                    <h3 className="name">{name}</h3>
                    <p className="commentuser">{comment}</p>
                    <div className="result">
                        <Button onClick={() => removeComment(index)}>
                            <a>Delete Comment
                            </a>
                        </Button>
                    </div>
                </Col>
            </Row>

        </div>
    );
}
