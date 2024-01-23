"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import PostList from "./components/posts/Posts";

export default function Home() {
  const [message, setMessage] = useState("Loading");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error: any) => {
        console.error("Error fetching message:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <Hero />
      <h1>{message}</h1>
      <PostList posts={posts} />
    </div>
  );
}
