import { Button, Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { authState } from "../states/auth";
import { photosState } from "../states/photos";
import { postsState } from "../states/posts";
import { usersState } from "../states/users";

export default function Home() {
  const [photos] = useRecoilState(photosState);
  const [users] = useRecoilState(usersState);
  const [posts] = useRecoilState(postsState);
  const [auth] = useRecoilState(authState);

  return (
    <Container>
        <h2>Home</h2>
        <h3>
          photos: {photos.length}
        </h3>
        <h3>
          users: {users.length}
        </h3>
        <h3>
          posts: {posts.length}
        </h3>
        <h3>
          auth: {auth ? 'true' : 'false'}
        </h3>
    </Container>
  )
}
