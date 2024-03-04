const recipes = require('../controllers/recipe.controller');
const express = require('express');
const router = express.Router();


router.post("/createRecipe", recipes.createRecipe);

router.get('/getRecipe', recipes.getRecipe)

router.patch("/editRecipe/:id", recipes.editRecipe);

router.delete("/deleteRecipe/:id", recipes.deleteRecipe);




module.exports = router;