import styled from "styled-components";
import { useEffect, useState } from "react";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  li {
    list-style: none;
  }

  p {
    text-transform: uppercase;
  }
`;

export default function Card() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character/";

  const loadCharacters = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <CardWrapper>
      <div>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt="{charachter.name}" />
            <p>{character.name}</p>
          </li>
        ))}
      </div>
    </CardWrapper>
  );
}
