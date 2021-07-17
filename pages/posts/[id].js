import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { selectorFamily, useRecoilValue } from 'recoil';
import { postsState } from '../../states/posts';
import Comment from '../../components/comment';
import axios from 'axios';

const getPostState = selectorFamily({
    key: 'getPostState',
    get: (id) => ({ get }) => {
        const posts = get(postsState);
        return posts.find((str) => {
            return str.id === parseInt(id);
        });
    },
});

function PostDetail({ id }) {
    const router = useRouter()

    const [post, setPost] = useState(useRecoilValue(getPostState(id)));
    const [comments, setComments] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

    useEffect(() => {
        console.log(post);
        if (post === undefined || post.length === 0) {
            getPost();
        }
        getComments();
    }, [post, id])

    const getPost = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        setPost(res.data[0]);
    }

    const getComments = async () => {
        const res = await axios.get(url);
        setComments(res.data);
    }

    if (router.isFallback) {
        return <div className="container">Loading...</div>
    }


    return (
        <div className="container">
            <h3 style={{ fontWeight: 'bold' }}>{post && post.title}</h3>
            <h3>{post && post.body}</h3>
            <br></br>

            <h4>Comments</h4>
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

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '*' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            id: params.id
        },
    }
}

export default PostDetail