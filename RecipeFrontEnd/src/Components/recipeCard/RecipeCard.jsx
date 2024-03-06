import React from 'react';
import "./RecipeCard.css"

export default function RecipeCard({ recipe }) {
  console.log(recipe[0]);
  return (
    <div>
      {recipe.map((item) => (
        <div key={item._id}>
          <div className="imageRecipeCardDiv">
          <img className="imageRecipeCard" src={item.imgURL}  />
          </div>
          <h1 className='nameRecipeCard'>{item.name}</h1>
          <div>
            <div className='instructions'>
              <h2>Instructions</h2>
              {item.instructions?.map((instruction) => (
                <p key={instruction._id}>
                  {instruction.step}: {instruction.instruction}
                </p>
              ))}
            </div>
            <div className='ingredients'>
              <h2>Ingredients</h2>
              <ul>
                {item.ingridients?.map((ingredient) => (
                  <li key={ingredient._id}>
                    {ingredient.quantity} {ingredient.measurement} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
