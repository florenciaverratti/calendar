import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from '../constants/themes';
import { Orders } from '../screens/index';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={{
        headerTitleStyle: {
            fontFamily: 'Raleway-Bold',
        },
        presentation: 'card'
        }}>
        <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
    )
}
export default OrderNavigator;