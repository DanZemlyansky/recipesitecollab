const mongoose = require("mongoose");

const cookBookSchema = new mongoose.Schema(
    {
     userId: { type: mongoose.Types.ObjectId, ref: "Users" },
     name:{ type: String},
     recipes:[{
        recipeId: { type: mongoose.Types.ObjectId, ref: "Recipes" },
     }],
     price:{type:String}
});

const Cookbook = mongoose.model("Cookbooks", cookBookSchema);

module.exports = {Cookbook};
