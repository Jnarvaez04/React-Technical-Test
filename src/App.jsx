import { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './Hooks/useCatImage';
import { useCatFact } from './Hooks/useCatFact';



function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
   
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h2>App de gatitos</h2>

      <button onClick={ handleClick }>Get new fact</button>
      { fact && <p>{ fact }</p> }
      { Image && <img src={imageUrl} alt={`Image extracted using the firts three words for ${fact}`}/>}
    </main>
  )
}

export default App
