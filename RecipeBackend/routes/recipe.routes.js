const recipes = require('../controllers/recipe.controller');
const express = require('express');
const { auth } = require('../middleware/auth.middleware')
const router = express.Router();


router.post("/createRecipe", auth, recipes.createRecipe);

router.get('/getRecipes', recipes.getRecipes)

router.get('/getRecipe/:id', recipes.GetRecipeById)




module.exports = router;