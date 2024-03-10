import React from 'react'
import './SingleRecipeCard.css'
import IngredientsCard from './IngredientsCard'

export default function SingleRecipeCard({ recipe }) {
  return (
    <div>
      <div className="imageRecipeCardDiv">
        <img className="imageRecipeCard" src={"https://b.zmtcdn.com/data/pictures/chains/9/16527959/fe2f25cff9135474e98d851e2e47df05.jpg"} />
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

      </div>



      <IngredientsCard recipe={recipe}></IngredientsCard>
    </div>
  )
}
