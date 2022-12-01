import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from "react-native";

import { PantallaPrincipal } from '../pantalla-principal';
import {styles} from './styles';

const Welcome= ({PantallaPrincipal}) =>{
    return (
        <View style={styles.container}>
        <View >
            <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.botonMas}>
            <TouchableOpacity style={styles.circulo}  onPress={PantallaPrincipal}>
                <Text style={styles.l}> → </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
} 

export default Welcome;