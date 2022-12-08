import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from '../constants/themes';
import { Cart } from '../screens/index';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
        headerTintColor: COLORS.text,
        headerTitleStyle: {
            fontFamily: 'Raleway-Bold',
        },
        presentation: 'card'
        }}>
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    )
}
export default CartNavigator;