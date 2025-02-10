// store.js
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer'; // Import your rootReducer

const store = createStore(cartReducer);

export default store;