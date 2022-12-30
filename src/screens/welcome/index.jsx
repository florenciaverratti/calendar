import {Button, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import { COLORS } from '../../constants/themes';
import {Ionicons} from '@expo/vector-icons';
import {styles} from './styles';

const Welcome= ({navigation}) =>{
    
    return (
        <View style={styles.container}>
        <View >
            <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.circulo} onPress={()=> navigation.navigate('Agenda')} >
                <Ionicons name="chevron-forward-outline" size={32} color={COLORS.white} />
            </TouchableOpacity>
        </View>
        </View>
    )
} 

export default Welcome;