"use client";
import React, { useState, useEffect } from "react";

interface Game {
  name: string,
  index: number
}

export default function Home() {
  const [message, setMessage] = useState("Loading");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message), 
        setGames(data.games)
      });
  }, []);

  return (
    <section>
      <h1>{message}</h1>
      <div>
        <ul>
          <li>ara ara</li>
          <li>ara ara</li>
          <li>ara ara</li>
        </ul>
      </div>

      {/* games.map((name, index) => (
        <div key={index}>
          {name}
        </div>
      )) */}
      
    </section>
  );
}
