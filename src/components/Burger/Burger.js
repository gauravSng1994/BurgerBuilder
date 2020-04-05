import React from "react";
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props)=> {
    let ingredients = Object.keys(props.ingredients).map(ingredientName => {
        return [...Array(props.ingredients[ingredientName])].map( (_,index) =>{
           return <BurgerIngredient type={ingredientName} key={ingredientName+index}/>
        });
    }).reduce( (arr,ing) => arr.concat(ing),[]);
    if(ingredients.length===0) ingredients = <p>Please start adding ingredients</p>;
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;