import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import withLoaded from "../hocs/withLoaded";
import { authState } from "../states/auth";
import { photosState } from "../states/photos";
import { postsState } from "../states/posts";
import { usersState } from "../states/users";

function Home() {
  const [photos] = useRecoilState(photosState);
  const [users] = useRecoilState(usersState);
  const [posts] = useRecoilState(postsState);
  const [auth] = useRecoilState(authState);

  return (
    <Container>
      <h2>Home</h2>
      <h3>
        <Link href="/photos">
          <a
            style={{ cursor: 'pointer' }}>Photos:  {photos.length}</a>
        </Link>
      </h3>
      <h3>
      <Link href="/users">
          <a
            style={{ cursor: 'pointer' }}>Users:  {users.length}</a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts">
          <a
            style={{ cursor: 'pointer' }}>Posts:  {posts.length}</a>
        </Link>
      </h3>
      <h3>
        auth: {auth.loaded && auth.user ? 'true' : 'false'}
      </h3>
    </Container>
  )
}

export default withLoaded(Home)