import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Api from "../../services/api.js";


function ListUsers() {

  useEffect(() => {
    async function getUsers() {
      const usersFromApi = await Api.get("/usuarios");
      console.log(usersFromApi);
    } 
    getUsers();
  }, []);   

  const navigate = useNavigate();
  return (
    <div>
      <TopBackground />
      <h1>Lista de Usuários</h1>
      <Button onClick={() =>navigate("/") } >Voltar </Button>
    </div>
  );
}

export default ListUsers;
