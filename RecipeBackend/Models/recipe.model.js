const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: "Users" },
        name:{type:String},
        desc:{type:String},
        ingridients:{type:String},
        instructions:{type:String},
        category: [{ type: String, required: true }],
        cookTime:{type:String},
        imgURL:{type:String},
    }
)

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = { Recipe }
