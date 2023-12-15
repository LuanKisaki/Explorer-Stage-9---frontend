import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/LuanKisaki.png" alt="Imagem de Avatar" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" hidden/>
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          alt="digite o seu nome"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="email"
          alt="digite a seu e-mail"
          icon={FiMail}
        />
        <Input
          placeholder="digite a senha atual"
          type="password"
          alt="digite a sua senha atual de acesso"
          icon={FiLock}
        />
        <Input
          placeholder="digite a nova senha"
          type="password"
          alt="digite a sua nova senha de acesso"
          icon={FiLock}
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
