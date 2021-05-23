import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 6rem;
  position: fixed;
  justify-content: center;
  align-items: space-between;
  background-color: var(--color-mainDark);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Navbar() {
  return (
    <Wrapper>
      <div>yoo</div>
      <Nav>
        <div>item #1</div>
        <div>item #1</div>
        <div>item #1</div>
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
