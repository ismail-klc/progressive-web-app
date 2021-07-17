import axios from 'axios'
import router from 'next/router'
import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { authState } from '../states/auth'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useRecoilState(authState);

    const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

    const handleSubmit = async (e) => {
        e.preventDefault()

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        const res = await axios.post(`${url}/api/signin`, {email, password},{
            withCredentials: true,
            headers: headers
        })

        if (res.status === 200) {
            setAuth(res.data)
            await router.push('/')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <Col xs={12} sm={8} lg={6} xl={4} className="mx-auto">
                    <h1 className="text-center login-title">Login</h1>
                    <div className="account-wall">
                        <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                            alt="" />
                        <form className="form-signin" onSubmit={handleSubmit}>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text" className="form-control" placeholder="Email" required autoFocus />
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" className="form-control" placeholder="Password" required />
                            <div className="d-grid gap-2">
                                <Button variant="secondary" type="submit">
                                    Sign in
                                </Button>
                            </div>
                            <a href="#" className="text-center new-account">Create an account </a>

                        </form>
                    </div>
                </Col>
            </div>
        </div>


    )
}

export default Login
