import { FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../constants/themes";
import { ProductItem } from '../../components';
import React from "react";
import {filterProducts} from '../../store/actions'
import {styles} from './style'
import { useEffect } from "react";

const ProductList = ({navigation}) => {
    const category = useSelector((state) => state.category.selected);
    const filterProducts = useSelector((state) => state.products.filterProducts);
    const dispartch = useDispatch();

    useEffect(() =>{
        dispartch(filterProducts(category.id));
    },[])
    
    const onSelected = (item) => {
        navigation.navigate('ProductItem', { title: item.title });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    );
    return(
        <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor = {(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default ProductList;