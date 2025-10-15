import { useContext } from "react";
import Modal from "./UI/Modal.jsx"
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../Util/formatting";
import Button from "./UI/Button.jsx";
import UserProgressContext from '../Store/UserProgressContext';
import CartItem from "./CartItem.jsx";

export default function  Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const  cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0 
    );    

    function handleHideCart(){
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }

    return (
        <Modal 
            className="cart"
            open={userProgressCtx.progress === 'cart'}
            onClose={userProgressCtx.progress === 'cart' ? handleHideCart : null}
            >

            <h2>Your Cart</h2>
            <ul>
                { cartCtx.items.map((item) => (
                    <CartItem 
                        key={item.id}
                        name={item.namne}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleHideCart}>Close</Button>
                { cartCtx.items.length > 0 && (<Button onClick={handleGoToCheckout}>Go to Checkout</Button>) }
            </p>
        </Modal>
    );
}