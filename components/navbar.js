import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { authState } from '../states/auth'
import { useRecoilState } from 'recoil'


function MyNavbar({ user }) {
    const router = useRouter()
    const [auth, setAuth] = useRecoilState(authState);
    const [navExpanded, setNavExpanded] = useState(false)
    const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

    useEffect(() => {
        setAuth({
            user,
            loaded: true
        })            
    }, [])

    const handleLogout = async (e) => {
        e.preventDefault()

        const res = await fetch(`${url}/api/signout`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })

        if (res.status === 200) {
            setAuth({
                user: null,
                loaded: true
            })
            await router.push('/login');
        }
        setNavExpanded(!navExpanded)
    }

    const onClick = () => setNavExpanded(!navExpanded)

    if (!auth.loaded) {
        return null
    }

    return (
        <div style={{ marginBottom: '80px' }}>
            <Navbar
                expanded={navExpanded}
                onToggle={setNavExpanded}
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
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" >
                                <a 
                                onClick={onClick}
                                className={`nav-link ${router.route === '/' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Home</a>
                            </Link>
                            <Link href="/photos">
                                <a 
                                    onClick={onClick}
                                className={`nav-link ${router.route === '/photos' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Photos</a>
                            </Link>

                            {
                                auth.user &&
                                <>
                                    <Link href="/users">
                                        <a 
                                        onClick={onClick}
                                        className={`nav-link ${router.route === '/users' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Users</a>
                                    </Link>
                                    <Link href="/posts">
                                        <a 
                                        onClick={onClick}
                                        className={`nav-link ${router.route === '/posts' ? 'active' : null}`} style={{ cursor: 'pointer' }}>Posts</a>
                                    </Link>
                                    <a
                                        onClick={handleLogout}
                                        className={`nav-link`}
                                        style={{ cursor: 'pointer' }}>Logout</a>
                                </>
                            }
                            {
                                !auth.user ?
                                    <Link href="/login">
                                        <a 
                                            onClick={onClick}
                                            className={`nav-link`} 
                                            style={{ cursor: 'pointer' }}>Login</a>
                                    </Link> : null
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
