import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../../config/api';
import RecipeCard from '../../Components/recipeCard/RecipeCard';
import "./Recipes.css";

function Recipes() {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/recipe/getRecipes`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <RecipeCard recipe={recipe}/>
    </div>
  );
}

export default Recipes;
