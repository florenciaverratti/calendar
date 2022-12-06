import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
    header: {
        flex:1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop: 20,
    },
    title: {
        paddingTop:20,
        fontSize: 20,
        fontFamily: 'Raleway-Thin',
        color: colors.white,
    },
});

const Header = ({titulo}) =>{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Bienvenido!</Text>
        </View>
    )
} 

export default Header;