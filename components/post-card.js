import Link from 'next/link'
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { usersState } from '../states/users';

function PostCard({
    id,
    userId,
    title,
    body
}) {

    return (
        <Col xs={12} sm={6} lg={4} xl={3}>
            <Card style={{ margin: 'auto' }} className="mb-4">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>

                    <Link href={`/posts/${id}`}>
                        <a className="btn btn-outline-dark">Go detail</a>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default PostCard
