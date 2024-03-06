// RecipesIdeasCard.js
import React from 'react';
import "./RecipesIdeasCard.css";

function RecipesIdeasCard({ name, src }) {
  return (
    <div className='recipeIdeasCardContainer'>
      <div className='imageContainer'>
        <img className='imageIdeas' src={src} alt="" />
        <h1 className='nameOfRecipeIdea'>{name}</h1>
      </div>
    </div>
  );
}

export default RecipesIdeasCard;
