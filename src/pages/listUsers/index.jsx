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
  DeleteUsers,
} from "./styles.js";
import Trash from "../../assets/trash.svg";

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

  async function DeleteUsers(id) {
    await Api.delete(`/usuarios/${id}`);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

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
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="Lixeira"
              onClick={() => DeleteUsers(user.id)}
            />
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
