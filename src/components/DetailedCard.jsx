import styled from "styled-components";
import { useParams } from "react-router-dom";
import "../App.css";

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

export default function DetailedCard({ characters, toggleFavouriteStatus }) {
  const { id } = useParams();
  const character = characters.find((character) => {
    return character.id === parseInt(id);
  });

  function toggleFavouriteStatusOnClick() {
    toggleFavouriteStatus(character.id);
  };

  return (
    <>
      {character && (
        <CardWrapper>
          <ul role="list">
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <button
                onClick={toggleFavouriteStatusOnClick}
                className={`fav__btn ${
                  character.isFavourite === false ? "unselected" : "selected"
                }`}
              >
                Favourite
              </button>
            </li>
          </ul>
        </CardWrapper>
      )}
    </>
  );
}
