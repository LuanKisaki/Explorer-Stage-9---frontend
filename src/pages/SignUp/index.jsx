import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar suas notas.</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          alt="digite o seu nome"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
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
        <Button title="Cadastrar" />
        <Link to="/">Voltar para tela de login</Link>

      </Form>
    </Container>
  );
}