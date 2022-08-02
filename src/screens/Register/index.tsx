import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

import { CategorySelect} from '../CategorySelect';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
 } from './styles';

export function Register () {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setcategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
      key: 'category',
      name: 'Category',
    });

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
      handleTransactionsTypeSelect(type);
    }

    function handleCloseSelectCategory(){
      setcategoryModalOpen(false);
    }

    return (
    <Container>
        <Header>
        <Title>Cadastro</Title>
        </Header>
        <Form>
        <Fields>
        <Input
        placeholder='Nome'
        />
        <Input
        placeholder='Preço'
        />
        <TransactionsTypes>
        <TransactionTypeButton
          type="up"
          title="Income"
          onPress={() => handleTransactionsTypeSelect('up')}
          isActive={transactionType === 'up'}
        />
        <TransactionTypeButton
          type="down"
          title="Outcome"
          onPress={() => handleTransactionsTypeSelect('down')}
          isActive={transactionType === 'down'}
        />
        </TransactionsTypes>

        <CategorySelectButton title='Categoria'/>
        </Fields>

        <Button title='Enviar' />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category ={category}
            setCategory={setCategory}
            closeSelectCategory ={handleCloseSelectCategory}          
          />
        </Modal>

    </Container>
    );
}
