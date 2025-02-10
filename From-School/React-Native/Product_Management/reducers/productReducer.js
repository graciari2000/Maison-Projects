import { FETCH_PRODUCTS } from '../actions/productActions';

const initialState = {
    featuredProducts: [],
    bestSellers: [],
    newArrivals: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            // Fetch and update products here
            return { ...state };
        default:
            return state;
    }
};

export default productReducer;