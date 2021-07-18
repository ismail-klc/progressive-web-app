import axios from 'axios';
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import PostCard from '../../components/post-card';
import withAuth from '../../hocs/withAuth';
import { postsState } from '../../states/posts';

function Posts() {
    const [posts, setPosts] = useRecoilState(postsState);

    useEffect(() => {
        if (posts.length === 0) {
            getPosts();
        }
    }, [])

    const getPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
    }

    return (
        <div className="container">
            <h2>Posts</h2>
            <Row>
                {
                    posts.length === 0 ? "loading" :
                        posts.map(u => (
                            <PostCard
                                id={u.id}
                                userId={u.userId}
                                title={u.title}
                                body={u.body}
                                key={u.id}
                            />
                        ))
                }
            </Row>
        </div>
    )
}

export default withAuth(Posts)
