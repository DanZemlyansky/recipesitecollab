const recipes = require('../controllers/recipe.controller');
const express = require('express');
const { auth } = require('../middleware/auth.middleware')
const router = express.Router();


router.post("/createRecipe", auth, recipes.createRecipe);

router.get('/getRecipe', recipes.getRecipe)

router.get('/getRecipe/:category', recipes.getRecipeByCategory);

router.patch("/editRecipe/:id", recipes.editRecipe);

router.delete("/deleteRecipe/:id", recipes.deleteRecipe);




module.exports = router;