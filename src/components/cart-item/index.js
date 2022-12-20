import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/themes'
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import {styles} from './style'

const CartItem =({ item, onDelete}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>  
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={COLORS.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CartItem;