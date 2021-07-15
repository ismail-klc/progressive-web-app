import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'


function MyNavbar() {
    const router = useRouter()

    return (
        <div style={{marginBottom: '80px'}}>
            <Navbar 
                fixed="top"
                collapseOnSelect 
                expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link href="/">
                        <a style={{ cursor: 'pointer' }}>
                            <Navbar.Brand >
                                PWA
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" cl>
                                <a className={`nav-link ${router.route === '/' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Home</a>
                            </Link>
                            <Link href="/photos">
                                <a className={`nav-link ${router.route === '/photos' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Photos</a>
                            </Link>
                            <Link href="/users">
                                <a className={`nav-link ${router.route === '/users' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Users</a>
                            </Link>
                            <Link href="/posts">
                                <a className={`nav-link ${router.route === '/posts' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Posts</a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
