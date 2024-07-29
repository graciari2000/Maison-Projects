import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;