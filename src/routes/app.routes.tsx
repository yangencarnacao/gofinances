import React from 'react';
import {} from '@react-navigation/bottom-tabs';

const { Navigatior, Screen} = createBottomNavigator();

export function AppRoutes(){
  return (
    <Navigator>
      <Screen
      name="Listagem"
      component={Dashboard}
      />
     <Screen
      name="Cadastrar"
      component={Register}
      />
       <Screen
      name="Resumo"
      component={Register}
      />
    </Navigator>
  )
}