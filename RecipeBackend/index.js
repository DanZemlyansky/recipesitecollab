const { app } = require("./app");

const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/RecipeApp")
    .then(() => {
        console.log("Connected to mongoDB");
    }).catch(error => {
        console.log(error);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


