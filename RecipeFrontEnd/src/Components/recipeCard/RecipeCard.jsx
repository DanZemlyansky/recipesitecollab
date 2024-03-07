import React from 'react';
import "./RecipeCard.css"

export default function RecipeCard({ recipe }) {


  return (
    <div>
      {recipe.map((item) => (
        <div>
        <div key={item._id}>
          </div>
          <h1 className=''>{item.name}</h1>
          <p>{item.desc}</p>
          <p>{item._id}</p>
          <p>Created by{item.userId.username}</p>
          </div>
      ))}
    </div>
  );
}
