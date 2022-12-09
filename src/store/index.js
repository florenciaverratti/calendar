import { categoryReducer, productsReducer } from './reducers';
import { combineReducers, createStore } from 'redux';

//import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    //cart: cartReducer,
    //orders: orderReducer,
});

export default createStore(rootReducer);
// applyMiddleware(thunk)