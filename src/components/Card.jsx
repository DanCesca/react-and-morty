import styled from "styled-components";
import { useEffect, useState } from "react";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  li {
    list-style: none;
  }

  p {
    text-transform: uppercase;
  }
`;

export default function Card({ fetchApi }) {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = () => {
    fetchApi().then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <CardWrapper>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}
