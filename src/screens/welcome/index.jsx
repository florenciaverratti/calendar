import {Button, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import {styles} from './styles';

const Welcome= ({navigation}) =>{
    
    return (
        <View style={styles.container}>
        <View >
            <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.circulo} >
                <Text style={styles.l} onPress={()=> navigation.navigate('Agenda')}> → </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
} 

export default Welcome;