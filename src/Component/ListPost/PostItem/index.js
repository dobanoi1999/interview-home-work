import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap'
import axiosClient from '../../../Api/axiosClient'

const PostItem = ({ post, author }) => {

    const [comments, setComments] = useState([])
    let contentSummany = post.body
    if (post.body.length > 100) {
        contentSummany = post.body.substring(0, 100)
    }

    useEffect(() => {
        const url = `posts/${post.id}/comments`;
        axiosClient
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    setComments(res.data)
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div >
            <Row className="justify-content-center">
                <Col md="auto">  <h4>Post Title {post.id}</h4></Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <p>Author : {author ? author.name : "unknown"}</p>
                    <p>Creat at : Sep 18,2018</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Title : {post.title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Content : {contentSummany}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {comments.length} replies
                                 </Accordion.Toggle>
                            </Card.Header>

                            {comments.map(comment => {

                                return <Accordion.Collapse key={comment.id} eventKey="0">

                                    <Card.Body>
                                        <p style={{ color: "green" }}>Name : {comment.name}</p>
                                        {comment.body}
                                        <hr />
                                    </Card.Body>
                                </Accordion.Collapse>
                            })}
                        </Card>

                    </Accordion>
                </Col>
            </Row>
            <hr />
        </div>
    )
}

export default PostItem
