import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { confirmCart, removeFromCart } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from "../../constants/themes";
import {CartItem} from '../../components/index';
import {styles} from './style';

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const onDelete = (id) => {
        dispatch(removeFromCart(id));
    };

    const onCreateOrder = () => {
        dispatch(confirmCart(cart, total));
    };
    
    const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
    const keyExtractor = (item) => item.id.toString();
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList 
                    data={cart} 
                    renderItem={renderItem} 
                    style={styles.listContainer}
                    keyExtractor={keyExtractor}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity  disabled={cart.length === 0}
                    style={cart.length === 0 ? styles.buttonDisabledConfirm : styles.buttonConfirm}
                    onPress={onCreateOrder} >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotalTitle}>Total</Text>
                        <Text style={styles.textTotal}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Cart;