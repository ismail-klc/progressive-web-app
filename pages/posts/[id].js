import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { postsState } from '../../states/posts';
import Comment from '../../components/comment';
import axios from 'axios';

function PostDetail() {
    const router = useRouter();
    const id = router.query.id;
    const [posts, setPosts] = useRecoilState(postsState);
    const [comments, setComments] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

    useEffect(() => {
        getComments();
    }, [])

    const getComments = async () => {
        const res = await axios.get(url);
        setComments(res.data);
    }


    return (
        <div className="container">
            <h2>Comments</h2>
            {
                comments.length > 0 ?
                    comments.map(c => (
                        <Comment
                            id={c.id}
                            postId={c.postId}
                            name={c.name}
                            email={c.email}
                            body={c.body}
                            key={c.id}
                        />
                    )) : null
            }
        </div>
    )
}

export default PostDetail
