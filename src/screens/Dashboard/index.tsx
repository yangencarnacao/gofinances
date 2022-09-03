import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

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

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard() {
  const data = [

    {
    id: '1',
    type: 'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign",
    },
    date:"13/04/2020"
  },

  {
    id: '2',
    type: 'negative',
    title:"Hamburgueria Pizzy",
    amount:"R$ 59,00",
    category:{
      name: "Alimentação",
      icon: "coffee",
    },
    date:"10/04/2020"
  },

  {
    id: '3',
    type: 'negative',
    title:"Aluguel do apartamento",
    amount:"R$ 1.200,00",
    category:{
      name: "Vendas",
      icon: "shopping-bag",
    },
    date:"10/04/2020"
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
          keyExtrator={item => item}
          renderItem={({ item }) => <TransactionCard data={item} />
        }
       />
        </Transactions>
      </Container>

  )
}

