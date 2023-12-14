import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quisquam maxime quibusdam? Quis reprehenderit sit suscipit nam,
            tenetur quasi vero aliquam consectetur animi velit dolorem nisi
            sunt? Inventore, exercitationem. Unde, incidunt beatae ipsum, harum
            nihil quos voluptatem enim hic cupiditate facilis, nesciunt id a.
            Quae quo omnis accusamus. Rem eius eveniet, doloribus nostrum labore
            corrupti, nisi, perferendis repellendus doloremque dolores
            cupiditate atque error eum quidem neque quam similique? Sed commodi
            repellat, cumque asperiores dolorem inventore dicta, perspiciatis
            adipisci esse modi quidem iusto nisi sapiente dolore quas provident
            odit impedit? Maiores alias quos id cumque iste, ullam nam ex hic
            odio?
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="vite" />
            <Tag title="react" />
            <Tag title="express" />
            <Tag title="node" />
            <Tag title="rocketseat" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
