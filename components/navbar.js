import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

function MyNavbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Container>
                    <Link href="/">
                        <a style={{ cursor: 'pointer' }}>
                            <Navbar.Brand >
                                PWA
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <Nav className="me-auto">
                        <Link href="/" cl>
                            <a className="nav-link" style={{ cursor: 'pointer' }}>Home</a>
                        </Link>
                        <Link href="/photos">
                            <a className="nav-link" style={{ cursor: 'pointer' }}>Photos</a>
                        </Link>
                        <Link href="/users">
                            <a className="nav-link" style={{ cursor: 'pointer' }}>Users</a>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
