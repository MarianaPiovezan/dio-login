import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Header } from "../../components/header/header";
import { Container, TextContent, TitleHighlight, Title, ImageHome } from "./style";
import  image  from "../../images/home.png";

export function Home() {

  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresa mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo na
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignin}
          />
        </div>
        <div>
          <ImageHome src={image} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
}
