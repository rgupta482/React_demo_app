import { useContext } from 'react';
import CartContext from '../Store/CartContext';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import UserProgressContext from '../Store/UserProgressContext';

export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleShowCart()
    {
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant' />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({cartCtx.items.length})</Button>
        </nav>
    </header>
} 