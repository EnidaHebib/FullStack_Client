import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="bg-gray-100  p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Travel Blog
      </h1>
      <div className="flex flex-wrap">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Homepage;
