import  App from  "./App";
import { COLORS } from "../constants/themes";
import CartNavigator from './cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderNavigator from './orders';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator initialRouteName= "App" 
            screenOptions={{ headerShown:false,
            tabBarLabelStyle:{
                fontFamily : 'Open-Sans-Regular',
                fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: COLORS.gray,
        }}>
            <BottomTab.Screen name= "Home" component= {App}
            options={{
                tabBarIcon: ({ focused}) =>(
                    <Ionicons name={ focused ? 'home' : 'home-outline'} 
                    size={24} color={COLORS.terciary} />
                )
            }}/>
            <BottomTab.Screen name= "CartTap" component= {CartNavigator}
            options={{
                    title: 'Carrito',
                    tabBarIcon: ({ focused}) =>(
                        <Ionicons name={ focused ? 'cart' : 'cart-outline'} 
                        size={24} color={COLORS.terciary} />
                    ),
                    tabBarBadge: cart.length === 0 ? null : cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.cuarty,
                        color: COLORS.text,
                        fontFamily: 'Raleway-Bold',
                        fontSize: 11,
                    },
                }}
            />
            <BottomTab.Screen name= "OrderTap" component= {OrderNavigator}
            options={{
                title: 'Ordenes',
                tabBarIcon: ({ focused}) =>(
                    <Ionicons name={ focused ? 'file-tray-full' : 'file-tray-full-outline'} 
                    size={24} color={COLORS.terciary} />
                ) 
            }}/>
        </BottomTab.Navigator>
    )
}
export default Tabs ;