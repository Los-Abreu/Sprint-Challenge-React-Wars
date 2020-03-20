import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PersonCard from './components/StarWars';
import './App.css';

const StyleDiv = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`;

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
        .catch(error => console.log(error))
  }, [])
  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyleDiv>
      {data.map((item, index) => {
        return <PersonCard key={index} name={item.name} birth_year={item.birth_year} gender={item.gender} eye_color={item.eye_color} height={item.height} mass={item.mass} />
      })}
      </StyleDiv>
    </div>
  );
}

export default App;
