import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  font-family: "Cedarville Cursive", cursive;
  font-size: 3rem;
  a {
    text-decoration: none;
    color: var(--lettering);
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
