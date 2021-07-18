import axios from 'axios';
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import UserCard from '../../components/user-card';
import withAuth from '../../hocs/withAuth';
import { usersState } from '../../states/users';

function Users() {
    const [users, setUsers] = useRecoilState(usersState);

    useEffect(() => {
        if (users.length === 0) {
            getUsers();
        }
    }, [])

    const getUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
    }

    return (
        <div className="container">
            <h2>Users</h2>
            <Row>
                {
                    users.length === 0 ? "loading" :
                        users.map(u => (
                            <UserCard 
                                id={u.id}
                                name={u.name}
                                email={u.email}
                                address={u.address}
                                phone={u.phone}
                                website={u.website}
                                company={u.company.name}
                                key={u.id}
                            />
                        ))
                }
            </Row>
        </div>
    )
}

export default withAuth(Users)
