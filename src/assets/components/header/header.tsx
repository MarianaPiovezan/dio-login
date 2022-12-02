import React from "react";
import logo from "../../images/logo.png";
import { Button } from "../button/button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  Logo,
  UserPicture,
  Column,
} from "./style";

export function Header({ autenticado }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo src={logo} alt="Logo Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
