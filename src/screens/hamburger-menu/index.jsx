import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import { FlatList } from "react-native";
import React from "react";
import { selectCategory } from '../../store/actions'
import {styles} from './style'

const HamburgerMenu = ({navigation, route}) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories );
    const onSelected = (item) =>{
        dispatch(selectCategory(item.id));
        navigation.navigate('ProductList', {title: item.title})
    };

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>; 
    return(
        <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor = {(item) => item.id.toString()}
        style= {styles.containerList}
        />
    );
}
export default HamburgerMenu;