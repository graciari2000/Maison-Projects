// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                return state.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        },
        removeFromCart: (state, action) => state.filter(item => item.id !== action.payload),
        updateQuantity: (state, action) => state.map(item =>
            item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
