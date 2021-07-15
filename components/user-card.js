import React from 'react'
import { Col } from 'react-bootstrap'

function UserCard({
    id,
    name,
    email,
    address,
    phone,
    website,
    company
}) {
    return (
        <Col xs={12} sm={6} lg={4} xl={3}>
        <div className="card mb-4" style={{margin: 'auto'}}>
            <div className="card-body">
                <center className="m-t-30"> <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-circle" width="150" />
                    <h4 className="card-title m-t-10">{name}</h4>
                    <h6 className="card-subtitle">{company}</h6>
                </center>
            </div>
            <div>
            <hr/> </div>
            <div className="card-body"> <small className="text-muted">Email address </small>
                <h6>{email}</h6> <small className="text-muted p-t-30 db">Phone</small>
                <h6>{phone}</h6><small className="text-muted p-t-30 db">Website</small>
                <h6>{website}</h6> <small className="text-muted p-t-30 db">Address</small>
                <h6>{address.street + address.suite + address.city}</h6>
            </div>
        </div>
        </Col>
    )
}

export default UserCard
