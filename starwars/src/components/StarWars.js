import React from 'react';
import styled from 'styled-components';

const StyledDiv= styled.div`
border: 3px black solid;
border-radius: 5px;
margin: 20px;
width: 30%;
background-color: rgba(52, 52, 52, 0.360);
h1 {
    font-size: 1.5rem;
    color: lightblue;
}
h2 {
    font-size: 1rem;
    color: lightblue;
}
h3 {
    font-size: 0.9rem;
    color: lightblue;
}
p {
    color: lightblue;
    font-size: 1rem;
}
`;
function PersonCard(props) {

    return(
    <StyledDiv>
    <h1>Name: {props.name}</h1>
    <h2>Birthdate: {props.birth_year}</h2>
    <h3>Gender: {props.gender}</h3>
    <div>
    <p>{props.name} has {props.eye_color} colored eyes. Is {props.height} centimeters tall, and weighs {props.mass} kilograms.</p>
    </div>
    </StyledDiv>
    );
}

export default PersonCard;