import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../config/api";
import RecipeCard from "../../Components/recipeCard/RecipeCard";
import "./SingleRecipe.css";

function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${api}/recipe/getRecipe/65e86877e848a38a3465f561`
        );
        setRecipe(response.data);
        console.log(recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchData();
  }, []);
  console.log(recipe);

  return (
    <div>
      <RecipeCard recipe={recipe} />
    </div>
  );
}

export default SingleRecipe;
