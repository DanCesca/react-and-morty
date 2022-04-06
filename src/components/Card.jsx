import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  li {
    list-style: none;
    border: 2px solid #be4ad6;
    border-radius: 10%;
    max-width: 70ch;
    margin-bottom: 2rem;
    padding: 3rem 1rem 2rem 1rem;
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
      <ul role="list">
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <Link to={`/character/${character.id}`}> Show more </Link>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}
