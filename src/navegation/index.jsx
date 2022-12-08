import TabNavigator from './tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;