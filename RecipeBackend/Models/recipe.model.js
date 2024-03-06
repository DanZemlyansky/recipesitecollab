const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: "Users" },
        name:{type:String},
        desc:{type:String},
        ingridients:[{
            name: {type:String},
            measurement: {type:String},
            quantity: {type:Number, default: 1}
        }],
        instructions:[{
            step:{type:Number},
            instruction:{type:String}
        }],
        category: [{ type: String, required: true }],
        cookTime:{type:String},
        imgURL:{type:String},
        
    }
)

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = { Recipe }
