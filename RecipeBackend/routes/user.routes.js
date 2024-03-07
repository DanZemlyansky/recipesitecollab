const user = require('../controllers/user.controller');
const {auth} = require('../middleware/auth.middleware')
const express = require('express');
const router = express.Router();


router.post("/register", user.Register);
router.post("/login", user.Login);
router.post('/image/:id', upload.single("productUser"), user.addImageUser)
router.get('/getUser/db',auth, user.getUser)
router.get('/getUsers', user.getUsers)



module.exports = router;