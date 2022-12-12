import { FlatList, Text } from "react-native";
import {filterProducts, selectProduct} from '../../store/actions/index'
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../constants/themes";
import { ProductItem } from '../../components';
import React from "react";
import {styles} from './style'
import { useEffect } from "react";

const ProductList = ({navigation}) => {
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(filterProducts(category.id));
    },[])
    
    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('ProductItem', { title: item.title });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    );
    return(
        <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor = {(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default ProductList;