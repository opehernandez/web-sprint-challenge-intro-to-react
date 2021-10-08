import React, {useState, useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import axios from 'axios';
import Characters from './Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState(null)
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      const {data} = resp

      setChar(data)
    })
  }, [])

  return (
    char &&
    <div className="App">
        {char.map((character, idx) => {
            return <Characters key={idx} name={character.name} birthYear={character.birth_year}/>
        })}
        
    </div>
  );
}

export default App;
