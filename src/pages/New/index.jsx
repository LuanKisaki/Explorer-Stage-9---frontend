import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://buymeacoffee.com/luankisaki" />
            <NoteItem isNew />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="react" />
            <NoteItem isNew placeholder='nova tag'/>
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}
