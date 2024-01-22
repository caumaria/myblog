import React from "react";
import styled from "styled-components";
import { foodImgs } from "../../data/data";

const HeroContainer = styled.div`
  text-align: center;
  background-color: white;
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
  section {
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--grey);
    width: 100%;
    div {
      cursor: pointer;
    }
    img {
      max-width: 340px;
    }
    h6 {
      font-size: 1.3rem;
      background-color: var(--links);
      color: white;
    }
    @media (max-width: 1250px) {
      flex-direction: column;
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <p>Coleções de delícias</p>
      <h1>Receitas simples para o dia a dia</h1>

      <section>
        {foodImgs.map((foodImg, i) => (
          <div key={i}>
            <img src={foodImg.img} alt={foodImg.title} />
            <h6>{foodImg.title}</h6>
          </div>
        ))}
      </section>
    </HeroContainer>
  );
}
