import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";


export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/LuanKisaki.png" alt="imagem do avatar" />

        <div>
          <span>Bem-vindo</span>
          <strong>Luan Kisaki</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
