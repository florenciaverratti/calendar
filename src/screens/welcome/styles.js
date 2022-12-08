import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    welcome:{
        color: COLORS.white,
        fontSize: 40,
        fontFamily: 'Raleway-Bold',
        marginBottom: 50,
    },
    circulo:{
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:800,
        backgroundColor: COLORS.cuarty,
    
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
            color: COLORS.white,
            fontSize: 60,
        },
});