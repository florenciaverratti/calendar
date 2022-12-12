import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/themes';
import React from 'react';
import { addToCart } from '../../store/actions';
import {styles} from './style'

const ProductItem = ({ item, onSelected}) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);
    const { title, price, description, weight } = product || {};

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <View style={{ ...styles.container }}>
            <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <View>
                        <Text style={styles.price}>${item.price}</Text>
                        <Button title="Add to cart" onPress={onAddToCart} color={COLORS.cuarty} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;