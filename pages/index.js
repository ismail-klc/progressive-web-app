import { Button, Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { photosState } from "../states/photos";
import { postsState } from "../states/posts";
import { usersState } from "../states/users";

export default function Home() {
  const [photos] = useRecoilState(photosState);
  const [users] = useRecoilState(usersState);
  const [posts] = useRecoilState(postsState);

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
    </Container>
  )
}
