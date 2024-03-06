import React from "react";
import "./HomePage.css";
import FadeInSection from "../../context/FadeInContext";

function HomePage() {
  return (
    <div>
        <div className="homePageContainer">
          <div className="blueShapeDiv">
            <img className="blueShape" src="src/assets/images/shapeBlue.png" />
            <img className="vegtables" src="src/assets/images/vegtables.png" />
          </div>
          <div className="containerForPlate">
            <div className="plateOfFoodDiv">
              <img
                className="plateOfFood"
                src="src/assets/images/plateOfFood.png"
              />
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
          </div>
       
      </div>
       </FadeInSection>
    </div>
  );
}

export default HomePage;
