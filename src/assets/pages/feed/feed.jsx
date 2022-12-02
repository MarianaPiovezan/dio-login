import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Header } from "../../components/header/header";
import { Card } from "../../components/card/card";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Container, Column, Title, TitleHighlight } from "./style";

export function Feed() {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            name="Mariana Piovezan"
            image="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"
          />
          <UserInfo
            percentual={50}
            name="Mariana Piovezan"
            image="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"
          />
          <UserInfo
            percentual={70}
            name="Mariana Piovezan"
            image="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"
          />
          <UserInfo
            percentual={22}
            name="Mariana Piovezan"
            image="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"
          />
          <UserInfo
            percentual={65}
            name="Mariana Piovezan"
            image="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"
          />
        </Column>
      </Container>
    </>
  );
}
