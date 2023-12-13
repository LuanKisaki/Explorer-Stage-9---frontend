import { Container } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";

export function Details() {
  return (
    <Container>
      <h1>Luan Kisaki</h1>
      <Button title="Entrar" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}
