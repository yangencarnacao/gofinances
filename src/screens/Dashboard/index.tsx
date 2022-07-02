import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  } from './styles';

export function Dashboard() {
  const data = [

    {
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign",
    },
    date:"13/04/2020"
  },

  {
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign",
    },
    date:"13/04/2020"
  },

  {
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign",
    },
    date:"13/04/2020"
  }

];
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

        <HighlightCards>
        <HighlightCard
        type="up"
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
        type="down"
        title="Saídas"
        amount="R$ 1.259,00"
        lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
        type="total"
         title="Total"
         amount="R$ 16.141,00"
         lastTransaction="01 à 16 de abril"
         />
        </HighlightCards>

        <Transactions>
          <Title>Listagem</Title>
          <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}


          />
        </Transactions>
      </Container>

  )
}

