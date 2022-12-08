import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './style'

const ProductItem = ({ item, onSelected}) => {
    return (
        <View style={{ ...styles.container }}>
            <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
            <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
                <View>
                <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;