import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Ul = styled.ul`
    display: flex;
    gap: 2rem;
    a {
        margin-top: 10px;
        text-decoration: none;
        color: var(--title);
        text-transform: uppercase;
        font-size: 1.2rem;
        font-family: "Courier New", monospace;   
        
        img {
          width: 20px;
        }
    }
`;

export default function NavLinks() {
  return (
    <Ul>
        <Link href='/'>Home</Link>
        <Link href='/recepies'>Receitas</Link>
        <Link href='/about'>Sobre</Link>
        <Link href='/search'><img src="/lupa.png" alt="ícone de lupa para pesquisar receitas" /></Link>


    </Ul>
  );
}
