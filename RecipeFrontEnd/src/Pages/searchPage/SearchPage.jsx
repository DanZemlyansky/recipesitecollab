import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'
import "./SearchPage.css"
import axios from 'axios'

import Sdisplay from '../../Components/searchPage/searchDisplay'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState({});
  const location = useLocation();

  const changeHandler = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  }


  const searchRecipes = async (e) => {

    await axios.get(`http://localhost:3000/api/v1/recipe/getRecipes?q=${query}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }).catch((err) => {
        console.log(err, 'Error searching recipes :(');
      });
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryFromUrl = params.get('q');
    if (queryFromUrl) {
      setQuery(queryFromUrl);
      searchRecipes(queryFromUrl);
    }
  }, [location.search]);


  return (
    <section id='searchPageWrapper'>
      <form id='searchField'>
        <TextField
          fullWidth
          onChange={changeHandler}
          id="standard-basic"
          label="Search for some recipes..."
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Button
                  id="searchBtn"
                  onClick={searchRecipes}
                  sx={{ display: 'flex', justifyContent: 'end' }}
                >
                  Search
                </Button>
              </InputAdornment>
            )
          }}
        />
      </form>

      {Object.keys(data).length === 0 ? null : <Sdisplay data={data} />}

    </section>
  );
}

export default SearchPage