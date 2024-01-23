import React from "react";
import styled from "styled-components";

export const HeroContainer = styled.div`
  text-align: center;
  background-color: white;
  width: 100%;
  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--lettering);
    font-family: "Cedarville Cursive", cursive;
    padding-bottom: 1rem;
  }
  p {
    color: black;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-family: "Courier New", monospace;
    padding: 2rem 0 0;
  }

  div {
    background-color: var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    section {
      column-count: 4;
      column-gap: 1rem;
      margin: 3rem auto;
      div {
        cursor: pointer;
        max-width: 346px;
      }
      img {
        width: 100%;
        &:hover {
          filter: brightness(1.2);
          transition: 0.3s;
        }
      }
      h6 {
        width: 100%;
        font-size: 1.3rem;
        background-color: var(--links);
        color: white;
      }
      @media (max-width: 1250px) {
        column-count: 2;
      }
    }
  }
`;
