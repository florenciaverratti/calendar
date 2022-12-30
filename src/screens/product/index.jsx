import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/themes';
import React from 'react';
import { addToCart } from '../../store/actions';
import { styles } from './style';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { title, price,time } = product || {};

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{time}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={COLORS.primary} />
    </View>
  );
};

export default Product;