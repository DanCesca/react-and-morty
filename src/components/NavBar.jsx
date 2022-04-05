import styled from "styled-components";

const NavWrapper = styled.nav`
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  list-style-type: none;
`;

const Link = styled.li`
padding: 1em;
`;

const LinkContent = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #be4adb;
  border-radius: 50%;
  display: inline-block;
`;

export default function NavBar() {
 return ( <NavWrapper>
    <List>
      <Link>
        <LinkContent></LinkContent>
      </Link>

      <Link>
        <LinkContent></LinkContent>
      </Link>

      <Link>
        <LinkContent></LinkContent>
      </Link>

      <Link>
        <LinkContent></LinkContent>
      </Link>
    </List>
    </NavWrapper>
 )
  ;
}
