import Link from 'next/link'
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function PhotoCard({
    id,
    albumId,
    url,
    title,
    thumbnailUrl }) {
    return (
        <Col xs={12} sm={6} lg={4} xl={3}>
            <Card style={{  margin: 'auto' }} className="mb-4">
                <Card.Img variant="top" src={thumbnailUrl} />
                <Card.Body>
                    <Card.Text>
                        {title}
                    </Card.Text>

                    <Link href={`/photos/${id}`}>
                        <a className="btn btn-outline-dark">Go detail</a>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhotoCard
