import React, { useState } from "react";
import { api } from "../../config/api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./CreateRecipe.css";

export default function CreateRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cookingTime, setCookingTime] = useState("");
  const [imgURL, setImgURL] = useState("");
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
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/recipe/createRecipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: recipeName,
          desc: description,
          ingredients: ingredients.filter(ingredient => ingredient.name !== ""),
          instructions: instructions.filter(instruction => instruction.step !== ""),
          category: categories.filter(category => category !== ""),
          cookTime: cookingTime,
          imgURL: imgURL,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }
  
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
    <div className="rootOfCreateRecipe">
      <h1 className="createTitle">Create Recipe</h1>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <form className="formForCreateRecipe" onSubmit={handleSubmit}>
        <div className="formSection">
          <h2>Recipe Information</h2>
          <div className="spaceForInputs">
            <TextField
              className="formControl"
              type="text"
              placeholder="Recipe Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
            <TextField
              className="formControl descInput"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="formSection">
          <h2>Ingredients:</h2>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="formControl spaceForInputs">
              <TextField
                type="text"
                className="ingredientInput"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
              />
              <Select
                value={ingredient.measurement}
                onChange={(e) => handleIngredientChange(index, "measurement", e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Unit
                </MenuItem>
                <MenuItem value="cup">cup</MenuItem>
                <MenuItem value="ml">ml</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="Tbsp">Tbsp</MenuItem>
                <MenuItem value="g">g</MenuItem>
                <MenuItem value="Kg">Kg</MenuItem>
              </Select>
              <TextField
                type="text"
                className="quantityInput"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
              />
              <Button
                className="removeButton"
                variant="contained"
                onClick={() => handleRemoveIngredient(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button className="addButton" variant="contained" onClick={handleAddIngredient}>
            Add Ingredient
          </Button>
        </div>
        <div className="formSection">
          <h2>Instructions:</h2>
          {instructions.map((instruction, index) => (
            <div key={index} className="formControl spaceForInputs">
              <TextField
                type="text"
                className="stepInput"
                placeholder="Step"
                value={instruction.step}
                onChange={(e) => handleInstructionChange(index, "step", e.target.value)}
              />
              <TextField
                type="text"
                placeholder="Instruction"
                className="instructionInput"
                value={instruction.instruction}
                onChange={(e) => handleInstructionChange(index, "instruction", e.target.value)}
              />
              <Button
                className="removeButton"
                variant="contained"
                onClick={() => handleRemoveInstruction(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button className="addButton" variant="contained" onClick={handleAddInstruction}>
            Add Instruction
          </Button>
        </div>
        <div className="formSection">
          <h2>Categories:</h2>
          {categories.map((category, index) => (
            <div key={index} className="formControl spaceForInputs">
              <TextField
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
              />
              <Button
                className="removeButton"
                variant="contained"
                onClick={() => handleRemoveCategory(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button className="addButton" variant="contained" onClick={handleAddCategory}>
            Add Category
          </Button>
             </div>
          <div className="formSection spaceForInputs">
          <TextField
            className="formControl"
            type="text"
            placeholder="Cooking Time"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
          <Select
            className="formControl"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Time
            </MenuItem>
            <MenuItem value="Minutes">Minutes</MenuItem>
            <MenuItem value="Hour">Hour</MenuItem>
            <MenuItem value="Day">Day</MenuItem>
          </Select>
          <TextField
            className="formControl"
            type="text"
            placeholder="Image URL" 
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
          </div>
          <Button type="submit" variant="contained">Submit</Button>
     
      </form>
    </div>
  );
}
