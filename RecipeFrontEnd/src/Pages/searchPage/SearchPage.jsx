import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import "./SearchPage.css"
import axios from 'axios'

import Sdisplay from '../../Components/searchPage/searchDisplay'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  const searchRecipes = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:3000/api/v1/recipe/getRecipes?q=${query}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }).catch((err) => {
        console.log(err, 'Error searching recipes :(');
      });
  }



  return (
    <section id='searchPageWrapper'>
      <form id='searchField'>
        <TextField onChange={changeHandler} id="standard-basic" label="Standard" variant="standard" />
        <Button onClick={searchRecipes}>Search</Button>
      </form>


      <Sdisplay data={data}></Sdisplay>
    </section >
  )
}

export default SearchPage