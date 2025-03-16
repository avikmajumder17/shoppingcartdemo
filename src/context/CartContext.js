import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    //Add To Cart function start

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                newProducts: updatedCartList
            }
        })

        updateTotal(updatedCartList);
    }

    //Add To Cart function end



    //Remove From Cart function start

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                newProducts: updatedCartList
            }
        })

        updateTotal(updatedCartList);
    }

    //Remove From Cart function end



    //Update Total function start

    const updateTotal = (products) => {
        let total = 0;

        products.forEach(product => total = total + product.price);

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }

    //Update Total function end
    
    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}