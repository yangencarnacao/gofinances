import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Constants  from 'expo-constants';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    width:100%;

    margin-top:${RFValue(Constants.statusBarHeight)}px;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
width: ${RFValue(48)}px;
height: ${RFValue(48)}px;

/* APESAR DA IMAGEM DO GOOGLE JÁ TER UM border-radius */
border-radius: 10px;

`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGretting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular}
`;

export const UserName = styled.Text`
color: ${({ theme }) => theme.colors.shape};

font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.bold}
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;

`;

export const Transactions = styled.View`

  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;


export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;

  `;

/* ESTAVA DANDO ERRO DE TIPAGEM NO FLATLISTPROPS, SOLUÇÃO FOI PASSAR A PROPS TIPADA COMO FlatListProps<DataListProps>
https://app.rocketseat.com.br/h/forum/react-native/7aa176ac-19aa-4ae7-b6f8-b4b5558808b1 */
export const TransactionList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
  paddingBottom: getBottomSpace()
  }
})``;
