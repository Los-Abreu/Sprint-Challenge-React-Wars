import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import personCard from './components/StarWars';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => {
          setData(response.data.results)
        })
        .catch(err => console.log(err))
  }, [])
  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data && data.map(item => {
        return(
          < personCard name={item.name} birth_year={item.birth_year} gender={item.gender} eye_color={item.eye_color} hair_color={item.hair_color} height={item.height} mass={item.mass} />
        )
      })}
    </div>
  );
}

export default App;
