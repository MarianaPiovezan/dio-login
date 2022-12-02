import { useNavigate } from "react-router-dom";
import {MdEmail, MdLock} from "react-icons/md"

import { Button } from "../../components/button/button";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";

import {
  Column,
  Container,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  CriarText
} from "./style";

export function Login() {

  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate('/feed');
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail/>} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>} />
              <Button title="Entrar" variant="secondary" onClick={handleClickSignin} type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
