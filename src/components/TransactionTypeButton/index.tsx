import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
    Container,
    Icon,
    Title,
 } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
}

export function TransactionTypeButton ({
    title,
    ...rest
} : Props) {
    return (
    <Container {...rest}>    
    <Icon />
    <Title>
        { title }
    </Title>
    </Container>
    
    );     
}