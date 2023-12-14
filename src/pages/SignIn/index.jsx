import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar suas notas.</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="digite seu e-mail de acesso"
          type="email"
          alt="digite o seu e-mail"
          icon={FiMail}
        />
        <Input
          placeholder="digite a senha"
          type="password"
          alt="digite a sua senha de acesso"
          icon={FiLock}
        />
        <Button title="Entrar" />
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}
