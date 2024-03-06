import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import FadeInSection from "../../context/FadeInContext";
import RecipesIdeasCard from "../../Components/recipesIdeasCard/RecipesIdeasCard";

function HomePage() {
  const categories = ['Chicken', 'Indian food', 'Rice'];

  const [catCards, setCatCards] = useState([]);
  const [catCard, setCatCard] = useState({});

  const getCategories = async () => {
    categories.map(async (category) => {
      try {
        await axios.get(`http://localhost/3000/api/v1/recipe/getCategory/${category}`)
          .then((response) => {
            console.log(response.data);
            setCatCards(...prevCards, response.data)
          }).catch((error) => {
            console.log('error setting one or more cards', error);
          });
      } catch (error) {
        console.log('Failed getting one or more categories', error);
      }
    })
  };

  useEffect(() => { getCategories() })


  return (
    <div>
      <div className="homePageContainer">
        <div className="blueShapeDiv">
          <img className="blueShape" src="src/assets/images/shapeBlue.png" alt="blue shape" />
          <img className="vegtables" src="src/assets/images/vegtables.png" alt="vegetables" />
        </div>
        <div className="containerForPlate">
          <div className="plateOfFoodDiv">
            <img className="plateOfFood" src="src/assets/images/plateOfFood.png" alt="plate of food" />
          </div>
          <div>
            <h1 className="titleOfHome">Best Recipes</h1>
            <p className="textUnderTitleHome">
              Welcome to our recipes website, where culinary inspiration meets
              home-cooked delight, offering a diverse array of mouthwatering
              dishes for every palate and occasion.
            </p>
            <button className="buttonExplore">Explore</button>
          </div>
        </div>

      </div>
      <FadeInSection>
        <div className="homePageSecondPart">

          <div className="recipeTitleDiv">
            <h1 className="recipesIdeasTitle">Recipes Ideas</h1>
          </div  >
          <div className="recipesIdeasCardDiv">
          <RecipesIdeasCard name="Breakfast" src="src/assets/images/breakfast.png" />
          <RecipesIdeasCard name="Fries" src="src/assets/images/frenchFries.png" />
          <RecipesIdeasCard name="Pasta" src="src/assets/images/pasta.png" />
          <RecipesIdeasCard name="Meat" src="src/assets/images/steak.png" />
          <RecipesIdeasCard name="Chicken" src="src/assets/images/chicken.png" />
          <RecipesIdeasCard name="Pizza" src="src/assets/images/pizza.png" />
          <RecipesIdeasCard name="Dessert" src="src/assets/images/dessert.png" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );



}

export default HomePage;


