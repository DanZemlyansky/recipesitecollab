import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <div>
      {recipe.map((item) => (
        <div key={item._id}>
          <h1 className=''>{item.name}</h1>
          <p>{item.desc}</p>
          <p>
            <Link to={`/recipes/${item._id}`}>{item._id}</Link>
          </p>
          <p>Created by {item.userId.username}</p>
        </div>
      ))}
    </div>
  );
}
