import {Home, Menu, Product, ProductList, Welcome} from '../screens/index';

import { COLORS } from '../constants/themes';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();

const App = () => {
    return(
        <Stack.Navigator initialRouteName='Welcome'
        screenOptions={{
            headerTitleStyle:{
                fontFamily:  'Raleway-Regular',
            },
            headerTintColor: COLORS.white,
        }}
        >
            <Stack.Screen 
                name='Welcome' 
                component={Welcome}
                options={{headerShown: false}}
                />
            <Stack.Screen 
                name='Agenda' 
                component={Home}
                options={{
                    headerStyle:{
                        backgroundColor: COLORS.secondary,
                    },
                }}
            />
            <Stack.Screen 
                name='Menu' 
                component={Menu}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='ProductList' 
                component={ProductList}
                options={({route}) => ({
                    title: route.params.title, 
                })}
            />
            <Stack.Screen 
                name='Product' 
                component={Product}
                options={({route}) => ({
                    title: route.params.title, 
                })}
            />
            {/* <Stack.Screen 
                name='Profesionals' 
                component={Profesionals}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='Servicios' 
                component={Servicios}
                options={{headerShown: false}}
            /> */}
        </Stack.Navigator>
    );
};

export default App;