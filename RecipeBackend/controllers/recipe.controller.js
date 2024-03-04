const { Recipe } = require('../Models/recipe.model');

const getRecipe = async(req,res)=>{
    const query =  req.query
    const recipe = await Recipe.find({...query})
    res.send(recipe)
}

const createRecipe = async(req,res)=>{
    const body = req.body
    try{
        body.userId = req.user.id
        const newRecipe = new Recipe(body)
        newRecipe.Id = newRecipe._id
        await newRecipe.save()
        res.send(body)
    }
    catch{res.status(400).send("Cant create Recipe")}
}

const editRecipe = async(req , res) =>{
    const body = req.body
    const {id} = req.params
    await Recipe.findByIdAndUpdate(id,body , {new:true})
    res.send(body);
}

const deleteRecipe = async(req,res)=>{
    const {id} = req.params
    const deleteRecipe = await Recipe.findByIdAndDelete(id)
    res.send("Porduct has been deleted")

}

module.exports = {getRecipe, createRecipe, editRecipe,}