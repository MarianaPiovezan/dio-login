import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

import { FiThumbsUp } from "react-icons/fi"
import React from "react";

export function Card() {
  return <CardContainer>
    <ImageBackground src="https://camo.githubusercontent.com/2ad22014b3cdfc281580982d422f5c19f364519418e2273b4d146300f67eb7ee/68747470733a2f2f692e696d6775722e636f6d2f655565774b34762e706e67"/>
    <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/86022712?s=400&u=e518ee856bb470ff447570dc98ab9f42e200a670&v=4"/>
            <div>
                <h4>Mariana Piovezan</h4>
                <p>Há 08 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito no curso de HTML e CSS no Bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
             <FiThumbsUp/> 10
            </p>
        </HasInfo>
    </Content>
  </CardContainer>;
}
