import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../services/api.js";
import { Container, Title } from "../Home/styles.js";
import {
  ContainerUsers,
  CardUsers,
  AvatarUser,
  TrashIcon,
  DeleteUser,
} from "./styles.js";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await Api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  const navigate = useNavigate();
  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <TrashIcon onClick={() => DeleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Voltar{" "}
      </Button>
    </Container>
  );
}

export default ListUsers;
