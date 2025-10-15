import MealIteam from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading)
        return <p className="center">Fetching meals...</p>

    if(error){
        return <Error title="Failed to fetch meals" messege={error}></Error>;
    }

    return (
        <ul id="meals">
                {loadedMeals.map((meal)=>(
                    <MealIteam key={meal.id} meal={meal}></MealIteam>
                ))}</ul>
            );
        }