import React from "react";
import styled from "styled-components";

export const PostContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  div {
    min-width: 400px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    border: 1px solid red;
    margin: 1rem;
    h3 {
      color: var(--title);
    }
    p {
      color: var(--lettering);
    }
  }
`;
