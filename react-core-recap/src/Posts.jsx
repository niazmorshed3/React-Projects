import { useEffect } from "react";
import { useState } from "react";
import Post from "./post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="">
      <h3>Posts :{posts.length} </h3>
      {posts.map((i) => (
        <Post post={i}></Post>
      ))}
    </div>
  );
}

// Creat a state to store data
// Creat use effect with no dependency
// use fetch to load data
