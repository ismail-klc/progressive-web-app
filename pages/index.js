import { Button, Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { photosState } from "../states/photos";
import { usersState } from "../states/users";

export default function Home() {
  const [photos, setPhotos] = useRecoilState(photosState);
  const [users, setUsers] = useRecoilState(usersState);

  return (
    <Container>
        <h2>Home</h2>
        <h3>
          photos: {photos.length}
        </h3>
        <h3>
          users: {users.length}
        </h3>
    </Container>
  )
}
