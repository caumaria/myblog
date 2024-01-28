import React from "react";
import { foodImgs } from "../../data/data";
import { HeroContainer } from "./HeroStyle";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroContainer>
      <p>Coleções de delícias</p>
      <h1>Receitas simples para o dia a dia</h1>

      <div>
        <section>
          {foodImgs.map((foodImg, i) => (
            <div key={i}>
              <Image src={foodImg.img} alt={foodImg.title} width={346} height={346}/>
              <h6>{foodImg.title}</h6>
            </div>
          ))}
        </section>
      </div>
    </HeroContainer>
  );
}
