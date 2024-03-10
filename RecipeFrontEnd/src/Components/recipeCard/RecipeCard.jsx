import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeCard.css";

export default function RecipeCard({ recipe,handleNavigate }) {
  return (
    <div>
      {recipe.map((item) => (
        <div key={item._id} onClick={() => handleNavigate(item._id)} className='recipe-card'>
          <h1 className='recipe-name'>{item.name}</h1>
          <p className='recipe-description'>{item.desc}</p>
          <p className='recipe-id'>
          </p>
          <p className='recipe-author'>Created by {item.userId.username}</p>
        </div>
      ))}
    </div>
  )
}
