import { Dimensions, StyleSheet, Text, View } from "react-native";

import React from "react";
import { colors } from "../../constants/color";

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    header: {
        height: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        paddingTop: '5%',
        fontSize: 20,
        fontFamily: 'Raleway-Regular',
        color: colors.white,
    },
});

const Header = () =>{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Bienvenido!</Text>
        </View>
    )
} 

export default Header;