// import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PostCard = ({ post, onDelete, setPosts }) => {
  console.log("post: ", post);
  const { id, author, title, content, cover } = post;
  // Handle user update
  const handleUpdate = async (e) => {
    // e.preventDefault();
    try {
      const newCard = await axios.put(`http://localhost:3000/posts/${id}`, {
        author: author,
        title: title,
        content: content,
        cover: cover,
      });
      console.log(newCard);

      // setForm({ author: "", title: "", content: "", cover: "" });
      // setIsUpdating(false);
      //this needs to be imported
      // fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      {/* <h3 className="text-lg font-bold">{post.title}</h3> */}
      <p className="text-gray-600">{post.body}</p>
      <div className="flex flex-wrap justify-evenly gap-2 mt-4">
        <Link to={`/posts/${post.id}`}>
          <h3 className="text-lg font-bold hover:underline">{post.title}</h3>
        </Link>
        <button
          onClick={() => handleUpdate(post.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(post.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
      <p className="mt-2">{post.content}</p>
      {post.cover && (
        <img src={post.cover} alt={post.title} className="mt-4 rounded" />
      )}
    </div>
  );
};

export default PostCard;
