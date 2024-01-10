import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  color: var(--lettering);
  font-family: "Cedarville Cursive", cursive;
  font-size: 2.2rem;
  a {
    text-decoration: none;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Link href="/">pitada de sal</Link>
    </LogoContainer>
  );
}

export default Logo;
