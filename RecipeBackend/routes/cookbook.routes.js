const cookbook = require('../controllers/cookbook.controller');
const express = require('express');
const router = express.Router();


router.post('/addRecipe', cookbook.addRecipe);
router.get('/getCookbooks', cookbook.getCookBooks);
router.get('/getCookbook/:id', cookbook.getCookBooks);
router.patch('/updateCookbook', cookbook.updateCookBook)
router.post('/createRecipe', cookbook.createCookBook);
router.delete('/deleteCookbook/:id', cookbook.deleteCookBook)


module.exports = router