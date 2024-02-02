"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import PostList from "./components/posts/Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);

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
      <PostList posts={posts} />
    </div>
  );
}
