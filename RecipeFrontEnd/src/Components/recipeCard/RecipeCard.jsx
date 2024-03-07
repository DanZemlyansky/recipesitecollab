import React from 'react';
import "./RecipeCard.css"

export default function RecipeCard({ recipe }) {
  if (!Array.isArray(recipe)) {
    return null; 
  }

  return (
    <div>
      {recipe.map((item) => (
        <div key={item._id}>
          <div className="imageRecipeCardDiv">
            <img className="imageRecipeCard" src={"https://b.zmtcdn.com/data/pictures/chains/9/16527959/fe2f25cff9135474e98d851e2e47df05.jpg"}  />
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
