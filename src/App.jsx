import { useEffect, useState } from 'react'
import './App.css'



const CAT_ENTPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
// const CAT_ENTPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`;

function App() {

  const [ fact, setFact ] = useState();
  const [ imageUrl, setImageUrl ] = useState();

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENTPOINT_RANDOM_FACT)
    .then((res) => res.json())
    .then(data => {
      const { fact } = data;
      setFact( fact )
    })

  }, [])


  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if(!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`,  { mode: 'no-cors' })
    .then((res) => res.json())
    .then(response => {
      const { url } = response
      setImageUrl(url)
     })
  },[fact])


  return (
    <main>
      <h2>App de gatitos</h2>
      { fact && <p>{ fact }</p> }
      { Image && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the firts three words for ${fact}`}/>}
    </main>
  )
}

export default App
