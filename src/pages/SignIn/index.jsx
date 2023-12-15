import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

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
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
