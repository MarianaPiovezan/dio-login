import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  CriarText,
} from "./style";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Esse e-mail não é válido.")
      .required("Esse campo é obrigatório"),
    password: yup
      .string().min(5, "Sua senha precisa ter no mínimo 5 dígitos.")
      .required("Esse campo é obrigatório"),
  })
  .required();

export function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);

  const handleClickSignin = () => {
    navigate("/feed");
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="email"
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                control={control}
                name="password"
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
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
