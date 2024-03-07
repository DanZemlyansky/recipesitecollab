import './ingredientCard.css'
import { ButtonGroup, Button } from '@mui/material';


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

                <div id='measumentUnit'>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>Metric</Button>
                        <Button>US</Button>
                    </ButtonGroup></div>
            </div>
            <div className='nameAndAmount'>
                <span className='name'></span>
                <span className='amount'></span>

            </div>



        </div>

    )




}