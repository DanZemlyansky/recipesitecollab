const recipes = require('../controllers/recipe.controller');
const express = require('express');
const router = express.Router();


router.post("/createRecipe", createRecipe);

router.get('/getRecipe', getRecipe)

router.patch("/editRecipe/:id", updateRecipe);

router.delete("/deleteRecipe/:id", deleteRecipe);



module.exports = router;