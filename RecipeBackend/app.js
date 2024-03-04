const express = require('express');
const cors = requre('cors');
const cookbookRoute = require('./routes/cookbook.routes');
const userRoute = require('./routes/user.routes');
const recipeRoute = require('./routes/recipe.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/cookbook' , cookbookRoute);
app.use('/api/v1/user' , userRoute);
app.use('/api/v1/recipe' , recipeRoute);


module.exports = { app };