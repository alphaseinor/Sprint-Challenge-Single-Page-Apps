import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </section>
  );
}
