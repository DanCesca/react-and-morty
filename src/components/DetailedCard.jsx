import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function DetailedCard() {
  const { id } = useParams();
  const url = "https://rickandmortyapi.com/api/character/" + id;
  const [character, setCharacter] = useState({});

  const fetchCharacter = () => {
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  const loadCharacter = () => {
    fetchCharacter().then((data) => setCharacter(data));
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <CardWrapper>
      <ul>
        <li key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </li>
      </ul>
    </CardWrapper>
  );
}
