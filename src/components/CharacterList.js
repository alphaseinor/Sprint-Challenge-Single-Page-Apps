import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";
import {Row} from "reactstrap"
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const defaultURL = 'https://rickandmortyapi.com/api/character'
  const [query, setQuery] = useState(defaultURL)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(defaultURL)
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  //handler for query

  const modifyQuery = q => {
    console.log(`Query: ${q}`);
    setQuery(`${defaultURL}/?name=${q}`)
    console.log(`New Query ${query}`)

    axios
      .get(`${defaultURL}/?name=${q}`)
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <section className="character-list">
      <SearchForm query={modifyQuery} />
      <Row>
      {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
      
      ))}
      </Row>
    </section>
  );
}
