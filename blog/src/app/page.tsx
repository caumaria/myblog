"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";

export default function Home() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:3001/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
      });
  }, []);

  return (
    <div>
      <Hero />
      <h1>{message}</h1>
    </div>
  );
}
