import React from 'react';
import styled from 'styled-components';

function personCard(props) {

    return(
    <h1>Name: {props.name}</h1>
    <h1>Birthdate: {props.birth_year}</h1>
    <h3>Gender: {props.gender}</h3>
    <p>{props.name} has {props.eye_color} eyes and {props.hair_color} hair. Is {props.height} centimeters tall, and weighs {props.mass} kilograms.</p>
    )
}

export default personCard;