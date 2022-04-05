import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color: #be4ad6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
`;

const Link = styled.li`
  padding: 1em;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: white;
  }
`;

export default function NavBar() {
  return (
    <NavWrapper>
      <List>
        <Link>
          <a href="#Home">Home</a>
        </Link>

        <Link>
          <a href="#Favourites">Favourites</a>
        </Link>

        <Link>
          <a href="#Random">Random</a>
        </Link>
      </List>
    </NavWrapper>
  );
}
