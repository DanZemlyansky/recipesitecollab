const { Recipe } = require('../Models/recipe.model');


const GetRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }
        res.send(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

const getRecipes = async (req, res) => {
    try {
        const query = req.query.q;
        let recipes;

        if (!query) {
            recipes = await Recipe.find();
        } else {
            recipes = await Recipe.find({
                $or: [
                    { name: { $regex: query, $options: 'i' } }, // case insensitive search for name
                    { description: { $regex: query, $options: 'i' } } // case insensitive search for description
                ]
            });
        }

        res.send(recipes);
    } catch (error) {
        console.log('Error getting recipes', error);
        res.status(500).send('Internal server error');
    }
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


module.exports = { getRecipes, createRecipe, editRecipe, deleteRecipe,  GetRecipeById }

