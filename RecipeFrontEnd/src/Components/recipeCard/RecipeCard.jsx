import React from 'react';
import "./RecipeCard.css"

export default function RecipeCard({ recipe }) {
  console.log(recipe[0]);
  return (
    <div>
      {recipe.map((item) => (
        <div key={item._id}>
          <div className="">
          <img className="recipesIMG" src={"https://b.zmtcdn.com/data/pictures/chains/9/16527959/fe2f25cff9135474e98d851e2e47df05.jpg"}  />
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
