import React from "react";
import styled from "styled-components";

export const PostContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin: 1rem;
  div {
    min-width: 320px;
    max-width: 800px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem 2rem;
    h3 {
      color: var(--title);
    }
    p {
      color: var(--lettering);
      text-align: center;
    }
  }
`;
