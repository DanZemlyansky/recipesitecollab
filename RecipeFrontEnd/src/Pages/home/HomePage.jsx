import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePageContainer">
      <div className="blueShapeDiv">
        <img className="blueShape" src="src/assets/images/shapeBlue.png" alt="" />
      </div>
      <div className='containerForPlate'>
      <div className="plateOfFoodDiv">
        <img className="plateOfFood" src="src/assets/images/plateOfFood.png" alt="" />
      </div>
      <h1 className='titleOfHome'>Best Recipes</h1>
    </div>
    </div>
  );
}

export default HomePage;
