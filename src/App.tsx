import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [nome, setNome] = useState<string>(); 
  const [characterName, setCharacterName] = useState<string>(); 

  const getData = useCallback( async()=> {
  
    await axios.get('https://swapi.py4e.com/api/people/3/')
    .then(function (response) {
    console.log(response.data);
    setCharacterName(response.data.name);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [getData])

  const defName = (nome: string) => {
    setNome(nome);
  }

  return (
    <div>
      <strong>Ola {nome}</strong>
      <strong>Personagem: {characterName}</strong> 
      <img src="../public/r2-d2.jpeg"/>
      <button onClick={() => defName('Tomate')}>Tomate</button>
      <button onClick={() => defName('Batata')}>Batata</button>
      <button onClick={() => defName('Beterraba')}>Beterraba</button>

    </div>
  )
}

export default App
