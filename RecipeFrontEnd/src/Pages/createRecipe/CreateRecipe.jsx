import React from 'react'
import './CreateRecipe.css'

export default function CreateRecipe() {
  return (
    <div>
      <h1>Create Recipe</h1>
      <form action="">
      <input type="text" placeholder='Recipe Name' />
      <input type="text" placeholder='Description' />
      <h2>Ingredients:</h2>
      <input type="text" placeholder='Name' />
      <select >
    <option value="">mL</option>
    <option value="">L</option>
    <option value="">Tbsp</option>
    <option value="">g</option>
    <option value="">kg</option>
      </select>
      <input type="text" placeholder='Amount' />
      <h2>Instructions:</h2>
      <input type="text" placeholder='Step number' />
      <input type="text" placeholder='Instruction' />
      <button>Add another step</button>
      <h2>Categories:</h2>
      <input type="text" placeholder='Category' />
      <button>Add another category</button>
      <input type="text" placeholder='Cooking Time'/>
      <select name="" id="">
        <option value="">Hour</option>
        <option value="">Day</option>
      </select>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
