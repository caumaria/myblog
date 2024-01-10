import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  color: var(--lettering);
  font-family: "Cedarville Cursive", cursive;
  font-size: 24px;
`;

function Logo() {
  return (
    <LogoContainer>
      <h1>pitada de sal</h1>
    </LogoContainer>
  );
}

export default Logo;
