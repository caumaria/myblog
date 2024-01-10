import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  a {
    position: relative;
    margin-top: 10px;
    text-decoration: none;
    color: var(--title);
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: "Courier New", monospace;
    img {
      width: 20px;
    }
    &:hover {
      color: var(--lettering);
    }
  }
  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: var(--lettering);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default function NavLinks() {
  return (
    <Ul>
      <Link href="/">Home</Link>
      <Link href="/recepies">Receitas</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/search">
        <img src="/lupa.png" alt="ícone de lupa para pesquisar receitas" />
      </Link>
    </Ul>
  );
}
