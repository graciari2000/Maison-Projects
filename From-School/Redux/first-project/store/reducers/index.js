import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from './itemReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
    items: itemReducer,
    favorites: favoriteReducer,
});

export default rootReducer;