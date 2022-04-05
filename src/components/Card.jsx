import styled from "styled-components";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  p {
    text-transform: uppercase;
  }
`;

export default function Card() {
  return (
    <CardWrapper>
      <div>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty Smith"
        />
        <p>Morty Smith</p>
      </div>
    </CardWrapper>
  );
}
