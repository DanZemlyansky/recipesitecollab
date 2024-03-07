import React from 'react'
import './SingleRecipeCard.css'

export default function SingleRecipeCard({recipe}) {
  console.log(recipe);
  return (
    <div>
        <div className="imageRecipeCardDiv">
          <img className="imageRecipeCard" src={"https://b.zmtcdn.com/data/pictures/chains/9/16527959/fe2f25cff9135474e98d851e2e47df05.jpg"}  />
          </div>
          <h1 className='nameRecipeCard'>{recipe.name}</h1>
          <div>
            <div className='instructions'>
              <h2>Instructions</h2>
              {recipe.instructions?.map((instruction) => (
                <p key={instruction._id}>
                  {instruction.step}: {instruction.instruction}
                </p>
              ))}
            </div>
            <div className='ingredients'>
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingridients?.map((ingredient) => (
                  <li key={ingredient._id}>
                    {ingredient.quantity} {ingredient.measurement} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </div>
  )
}
