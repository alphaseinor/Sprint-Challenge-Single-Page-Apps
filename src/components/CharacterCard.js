import React from "react";
import {Col, Card, CardImg, CardTitle, CardSubtitle, } from 'reactstrap';


export default function CharacterCard(props) {
  //console.log(props)
  return (
    <Col key={props.id} xs="3">
      <Card>
        <CardImg top width="100%" src={props.character.image} alt={`Photo of ${props.character.name}`} />
        <CardTitle>{props.character.name}</CardTitle>
        <CardSubtitle>{`Is a ${props.character.gender} ${props.character.species} who is ${props.character.status}`}</CardSubtitle>
      </Card>
    </Col>
  );
}


//<Row key={character.id}>
/* <img src={character.image} alt={`Photo of ${character.name}`} />
<h2>{character.name}</h2>
</Row> */