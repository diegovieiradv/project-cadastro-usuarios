import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../services/api.js";
import { Title } from "../Home/styles.js";

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
    <div>
      <TopBackground />
      <Title>Lista de Usuários</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <TrashIcon onClick={() => deleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button onClick={() => navigate("/")}>Voltar </Button>
    </div>
  );
}

export default ListUsers;
