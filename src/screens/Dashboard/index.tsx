import React from "react";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon
  } from './styles';

export function Dashboard() {
  return (
      <Container>
        <Header>
        <UserWrapper>
          <UserInfo>
            {/* IMAGEM RETIRADA DO PERFIL DO GOOGLE */}
            <Photo
            source=
            {{ uri: 'https://lh3.googleusercontent.com/a-/AOh14Gg3fIq24Il6CTZikB9WKIHQWwU8AvMNXoso3fw2RQ=s96-c-rg-br100'}}
            />
              <User>
                <UserGretting>Olá,</UserGretting>
                <UserName>Yang</UserName>
                </User>
          </UserInfo>
          <Icon name="power" />
          </UserWrapper>
        </Header>
      </Container>

  )
}

