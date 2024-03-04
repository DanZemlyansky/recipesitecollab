const cookbook = require('../controllers/cookbook.controller');
const express = require('express');
const router = express.Router();


router.post('/addRecipe', cookbook.addRecipe);
router.get('/getCookbooks', cookbook.getCookBooks);
router.get('/getCookbook/:id', cookbook.getCookBook);
router.patch('/updateCookbook', cookbook.updateCookBook)
router.post('/createRecipe', cookbook.createRecipe);
router.delete('/deleteCookbook/:id', cookbook.deleteCookBook)


module.exports = router