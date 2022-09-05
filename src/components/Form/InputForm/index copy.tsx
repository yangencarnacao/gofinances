import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container } from './styles';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({
  control,
  name,
  error,
  ...rest
}: Props){
  return(
@@ -29,6 +31,7 @@ export function InputForm({
        )}
        name={name}
      />
      {error && <Error>{ error }</Error>}
    </Container>
  );
}