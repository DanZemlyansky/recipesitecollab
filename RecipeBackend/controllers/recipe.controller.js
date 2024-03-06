const { Recipe } = require('../Models/recipe.model');

const getRecipeByCategory = async () => {
    try {
        // get category from URL
        const category = req.params.category;
        const recipes = await Recipe.find({ category })
    } catch (error) {
        console.log('error getting recipes by selected category', error);
        res.status(500).send('internal server error')
    }
}

const getRecipe = async (req, res) => {
    const query = req.query;
    const recipe = await Recipe.find({ ...query });
    res.send(recipe);
}

const createRecipe = async (req, res) => {
    const body = req.body
    try {
        body.userId = req.user.id
        const newRecipe = new Recipe(body)
        newRecipe.id = newRecipe._id

        await newRecipe.save()
        res.send(body)
    }
    catch { res.status(400).send("Cant create Recipe") }
}

const editRecipe = async (req, res) => {
    const body = req.body
    const { id } = req.params
    await Recipe.findByIdAndUpdate(id, body, { new: true })
    res.send(body);
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params
    const deleteRecipe = await Recipe.findByIdAndDelete(id)
    res.send("Porduct has been deleted")

}

module.exports = { getRecipe, createRecipe, editRecipe, deleteRecipe, getRecipeByCategory }