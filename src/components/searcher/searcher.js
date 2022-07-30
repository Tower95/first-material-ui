import { IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'


const Searcher = () => {

  let [value, setValue] = useState('');

  return (
    <div>
      <Stack>
        <TextField placeholder='Search' onKeyUp={event =>  setValue(event.target.value)}>
        </TextField>
        <IconButton></IconButton>
      </Stack>
    </div>
  )
}

export default Searcher
