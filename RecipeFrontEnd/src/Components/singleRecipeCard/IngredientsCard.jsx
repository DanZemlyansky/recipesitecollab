import './ingredientCard.css'



export default function IngredientsCard() {
    return (


        <div id="ingredientWrapper">
            <h1 id='ingredientTitle'>Ingredients</h1>
            <div id="servingsMeasurmentContainer">
                <div id='servings'>
                    <span id='servingLabel'>servings</span>
                    <button>+</button>
                    <button>-</button>


                </div>

                <div id='measurmentUnit'>

                    <div id='metricButtons'>
                        <button className='metricBtn'>Metric</button>
                        <button className='metricBtn'>US</button>
                    </div>
                </div>
            </div>
            <div id='line'></div>
            <div className='nameAndAmount'>
                <span className='name'>Ingredient name</span>
                <span className='amount'>90g</span>

            </div>



        </div>

    )




}