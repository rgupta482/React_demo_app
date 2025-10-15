import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";
import { currencyFormatter } from "../Util/formatting.js";
import Button from "./UI/Button.jsx";

export default function MealIteam({meal}){
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
}