import React from 'react'
import { TextField } from '@mui/material'
import "./SearchPage.css"

function SearchPage() {
  return (
    <section id='searchPageWrapper'>
      <div id='searchField'>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>

    </section>
  )
}

export default SearchPage