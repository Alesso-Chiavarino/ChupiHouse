import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";


const ItemListContainer = () => {

    const [drinks, setDrinks] = useState([])

    // useEffect(() => {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic#')
    //     .then(res => res.json())
    //     // .then(res => console.log(res.drinks[0].strDrink))
    //     .then(res => setDrinks(res.drinks))
    // }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        // .then(res => console.log(res.drinks[0].strDrink))
        .then(res => setDrinks(res))
    }, [])
    
    // console.log(drinks.drinks)
    console.log(drinks)
    

    
    // const prodDrink = drinks.map(drink => <span>{drink.strDrink}</span>)

    return(

        <div className="d-flex flex-wrap mx-5" >
            {drinks.map(drink => <ListItem nombre = {drink.title} img = {drink.thumbnailUrl} />)}
            {/* {prodDrink} */}
        </div>
    )
}
export default ItemListContainer;