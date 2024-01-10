import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 4rem;
  border-bottom: 1px solid #2c2c2c14;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
  }
`

function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavLinks />
    </NavbarContainer>
  )
}

export default Navbar;
