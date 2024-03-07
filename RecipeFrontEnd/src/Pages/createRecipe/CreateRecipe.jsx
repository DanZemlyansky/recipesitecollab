import React, { useState } from "react";
import axios from "axios";
import { api } from "../../config/api";

export default function CreateRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", measurement: "", quantity: "" }]);
  const [instructions, setInstructions] = useState([{ step: "", instruction: "" }]);
  const [categories, setCategories] = useState([""]);
  const [cookingTime, setCookingTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", measurement: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, { step: "", instruction: "" }]);
  };

  const handleRemoveInstruction = (index) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const handleAddCategory = () => {
    setCategories([...categories, ""]);
  };

  const handleRemoveCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const handleIngredientChange = (index, key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][key] = value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index, key, value) => {
    const newInstructions = [...instructions];
    newInstructions[index][key] = value;
    setInstructions(newInstructions);
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/recipe/createRecipe`, {
        name: recipeName,
        description,
        ingredients,
        instructions,
        categories,
        cookingTime,
      });
      setSuccessMessage("Recipe created successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating recipe:", error);
      setErrorMessage("Failed to create recipe. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <select
              value={ingredient.measurement}
              onChange={(e) =>
                handleIngredientChange(index, "measurement", e.target.value)
              }
            >
              <option value="">ml</option>
              <option value="">L</option>
              <option value="">Tbsp</option>
              <option value="">g</option>
              <option value="">Kg</option>
            </select>
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            {index > 0 && (
              <button onClick={() => handleRemoveIngredient(index)}>
                Remove Ingredient
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        <h2>Instructions:</h2>
        {instructions.map((instruction, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Step"
              value={instruction.step}
              onChange={(e) =>
                handleInstructionChange(index, "step", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Instruction"
              value={instruction.instruction}
              onChange={(e) =>
                handleInstructionChange(index, "instruction", e.target.value)
              }
            />
            {index > 0 && (
              <button onClick={() => handleRemoveInstruction(index)}>
                Remove Instruction
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddInstruction}>Add Instruction</button>
        <h2>Categories:</h2>
        {categories.map((category, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
            />
            {index > 0 && (
              <button onClick={() => handleRemoveCategory(index)}>
                Remove Category
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddCategory}>Add Category</button>
        <input
          type="text"
          placeholder="Cooking Time"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />
        <select name="" id="">
          <option value="">Hour</option>
          <option value="">Day</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
