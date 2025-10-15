import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: () => {},
    clearCart: () => {}
});

function cartReducer(state, action)
{
    if(action.type == 'Add_Item')
    {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        if(existingCartItemIndex > -1)
        {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else
        {
            updatedItems.push({...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if(action.type == 'Remove_Item')
    {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];    
        const updatedItems = [...state.items];
        if(existingItem.quantity === 1)
        {
            updatedItems.splice(existingCartItemIndex, 1);
        }
        else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    if(action.type == 'Clear_Cart')
    {
        return {...state, item: [] };
    }
    return state;
}

export function CartContextProvider({ children }){
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items:[]});

    function addItem(item){
        dispatchCartAction({ type: 'Add_Item', item: item });
    }

    function removeItem(id){
        dispatchCartAction({ type: 'Remove_Item', id: id });
    }

    function clearCart(){
        dispatchCartAction({ type: 'Clear_Cart' });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };

    return <CartContext.Provider value={cartContext}> {children} </CartContext.Provider>
}

export default CartContext;