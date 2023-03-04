import React from "react";
import style from './recipe.module.css'

const Recipe=({title,calories,image,ingredients})=>{
    
    return(
        
        <div className={style.recipe} key={title}>
            
            <img className={style.image} src={image} alt={title}/>
            <div className={style.text}>
                <h1 className={style.title}>{title}</h1>
            </div>
            <div className={style.text}>
            <h2>Calories :</h2>
                <p> {calories} cal</p>
            </div>

            <div className={style.text}>
                <h2>Recipe :</h2>
            </div>
            <ol>
                {ingredients.map(ingredient=>(
                    <li >{ingredient.text}</li>
                )
                    
                )}
            </ol>
            
            
        </div>
    )
    
}

export default Recipe;