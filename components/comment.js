import React from 'react'
import { Card } from 'react-bootstrap'

function Comment({
    id,
    postId,
    name,
    email,
    body
}) {
    return (
        <Card className="mb-3" >
            <div className="d-flex flex-row comment-row mt-0" style={{ padding: '10px' }}>
                <div className="p-2">
                    <img src="https://i.imgur.com/Ur43esv.jpg" alt="user" width="40" className="rounded-circle" />
                </div>
                <div className="comment-text w-100">
                    <h5 className="font-medium">{email}</h5>
                    <h6 className="font-medium">{name}</h6>
                    <span className="mb-5 d-block" style={{fontSize: '18px'}}>{body} </span>
                    <div className="comment-footer">
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Comment
