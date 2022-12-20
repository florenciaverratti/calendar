import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import {styles} from './style'

const ProductItem = ({ item, onSelected}) => {
    return (
        <View style={{ ...styles.container }}>
            <TouchableOpacity style={styles.container}  onPress={() => onSelected(item)}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;