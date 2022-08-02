import { IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {

  let [inputUser, setInputUser] = useState('octocat');
  let [user, setUser] = useState('inputUser');

  const handleSubmit = (event) => {
    console.log('clik')
  }

  return (
    <>
      <Stack
        direction="row"
        sx={{
          marginTop: '30px',
          width: '80%'
        }}
      >
        <TextField
          id='outline-basic'
          label='GitHub User'
          size='small'
          variant="outlined"
          placeholder='Octocat'
          onKeyUp={event => setInputUser(event.target.value)}
          sx={{
            width: '90%'
          }}
        >
        </TextField>
        <IconButton
          onClick={handleSubmit}
          size='small'
          sx={{
            position: 'relative',
            left: '-41px',
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </>
  )
}

export default Searcher

