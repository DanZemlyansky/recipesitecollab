import { useState } from 'react';
import './ingredientCard.css';

export default function IngredientsCard() {
    let [servings, setServings] = useState(1);
    const [isMetric, setIsMetric] = useState(true);

    const toggleMetric = () => {
        setIsMetric(!isMetric);
    };


    const addServing = () => {
        setServings(prevServings => prevServings + 1);
    };

    const decreaseServing = () => {
        setServings(prevServings => prevServings - 1);
    };

    return (
        <div id="ingredientWrapper">
            <h1 id="ingredientTitle">Ingredients</h1>
            <div id="servingsMeasurmentContainer">
                <div id="servings">
                    <span id="servingLabel">servings</span>
                    <div className="servingCounter">
                        <button onClick={decreaseServing} className="servingCounterBtn">-</button>
                        <span className="servingLabelCounter">{servings}</span>
                        <button onClick={addServing} className="servingCounterBtn">+</button>
                    </div>
                </div>
                <div id="measurmentUnit">
                    <div id="metricButtons">
                        <button
                            id="metricBtnLeft"
                            className={`metricBtn ${isMetric ? 'activeMetric' : ''
                                }`}
                            onClick={toggleMetric}
                        >
                            Metric
                        </button>
                        <button
                            id="metricBtnRight"
                            className={`metricBtn ${!isMetric ? 'activeMetric' : ''
                                }`}
                            onClick={toggleMetric}
                        >
                            US
                        </button>
                    </div>
                </div>
            </div>
            <div id="line"></div>
            <div className="nameAndAmount">
                <span className="name">Ingredient name</span>
                <span className="amount">90g</span>
            </div>
        </div>
    );
}
