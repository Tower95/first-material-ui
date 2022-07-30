import { Container } from '@mui/system'
import React from 'react'
import Searcher from './components/searcher/searcher'

const App = () => {
  return (
    <Container
      sx={{
        backgroundColor: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >

      <h1> Hola</h1>
      <Searcher />
    </Container>
  )
}

export default App
