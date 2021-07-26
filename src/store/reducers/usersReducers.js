let product
let updatedPrice
let updatedQty

const a=JSON.parse(localStorage.getItem('addedProducts'))
const q=JSON.parse(localStorage.getItem('totalQty'))
const p=JSON.parse(localStorage.getItem('totalPrice'))
console.log(a);
const initialState={
    addedProducts: a || [],
    totalPrice: p || 0,
    totalQty: q || 0,
    products: [],
}

const usersReducers = (state = initialState, action) => {
    if (action.type === "ADD_PRODUCTS") {
        return { ...state, products: action.payload }
    } else if (action.type === "ADD_TO_CART") {
        product = action.payload;
        product.qty = product.qty?product.qty:1;
        updatedQty = state.totalQty + product.qty;
        updatedPrice = state.totalPrice + product.price;

        return {
            ...state,
            addedProducts: [product, ...state.addedProducts],
            totalPrice: updatedPrice,
            totalQty: updatedQty
        }
    } else if (action.type === "INC") {
        product = action.product;
        product.qty =product.qty + 1;
        updatedQty = state.totalQty + 1;
        updatedPrice = state.totalPrice + product.price;

        return {
            ...state,
            addedProducts: [...state.addedProducts],
            totalPrice: updatedPrice,
            totalQty: updatedQty
        }
    }else if (action.type === "DEC") {
        if (action.product.qty>1) {
            product = action.product;
            product.qty =product.qty - 1;
            updatedQty = state.totalQty - 1;
            updatedPrice = state.totalPrice - product.price;
        }

        return {
            ...state,
            addedProducts: [...state.addedProducts],
            totalPrice: updatedPrice,
            totalQty: updatedQty
        }
    } else if (action.type === "DELETE_PRODUCT") {
        
            product = action.product;
            const filterd=state.addedProducts.filter(p=>p.id!==product.id)
            updatedQty = state.totalQty - product.qty;
            updatedPrice = state.totalPrice - product.price*product.qty;

        return {
            ...state,
            addedProducts: [...filterd],
            totalPrice: updatedPrice,
            totalQty: updatedQty
        }
    } else {
        return state
    }
}

export default usersReducers