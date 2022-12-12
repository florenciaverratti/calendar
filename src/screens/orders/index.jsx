import { FlatList, View } from "react-native";
import { deleteOrder, getOrders } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import {OrderItem} from '../../components/index';
import React from "react";
import {styles} from './style'
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const Orders = ({navigation}) => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const onDelete = (id) => {
        dispatch(deleteOrder(id));
    };

    useFocusEffect(
        useCallback(() => {
        dispatch(getOrders());
        }, [dispatch])
    );

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
    return (
        <View style={styles.container}>
            <FlatList 
            data={orders} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    )
}
export default Orders;