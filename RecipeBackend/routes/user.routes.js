const user = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();


router.post("/register", register);

router.post("/login", login);

router.get('/login', getUser)

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);



module.exports = router;