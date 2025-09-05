import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from "./styles";

function Home() {
  return (
    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>
      <form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <input type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <input type="number" placeholder="Idade do usuário" />
            </div>
          </div>
          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <input type="email" placeholder="E-mail do usuário" />
          </div>
        </ContainerInputs>
        <button>Cadastrar Usuário</button>
      </form>
    </Container>
  );
}

export default Home;
