import styled from "styled-components";

const HeaderBox = styled.header`
  background-color: #be4adb;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderBox>
      <h1>React and Morty</h1>
    </HeaderBox>
  );
}
