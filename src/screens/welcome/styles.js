import React from "react";
import { StyleSheet } from "react-native";
import { colors } from '../../constants/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    welcome:{
        color: colors.white,
        //fontFamily: 'Raleway-Bold',
    },
    circulo:{
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:200,
    
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            
            elevation: 5,
        },
        l:{
            color: colors.black,
            fontSize: 32,
        },
        botonMas:{
            alignItems: 'flex-end',
            marginBottom: 30,
            marginRight: 30,
        }
});