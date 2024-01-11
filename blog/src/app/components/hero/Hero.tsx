import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 0 4rem;
  text-align: center;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--lettering);
    font-family: "Cedarville Cursive", cursive;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h1>
        Receitas simples e deliciosas para o dia a dia
      </h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cum
      laudantium laborum provident, possimus nostrum, dicta officiis veritatis
      obcaecati alias sit perferendis nam vitae aperiam maiores. Aliquam
      incidunt ipsa labore?
    </HeroContainer>
  );
}
