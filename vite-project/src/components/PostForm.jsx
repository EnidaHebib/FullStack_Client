import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const PostForm = ({ onSubmit, initialData = {} }) => {
  const [id, setId] = useState(initialData.id || null); // Auto-incremented, no input field
  const [author, setAuthor] = useState(initialData.author || ""); // New field for author
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [cover, setCover] = useState(initialData.cover || "");
  const [date, setDate] = useState(
    initialData.date || new Date().toISOString().slice(0, 10)
  ); // Default to today
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author || !title || !content || !cover) {
      alert("All fields are required!");
      return;
    }
    await axios.post(`http://localhost:3000/posts`, {
      author: author,
      title: title,
      content: content,
      cover: cover,
    });
    // onSubmit({ id, author, title, content, cover, date });
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-lg">
      {/* <div className="mb-4">
        <label className="block text-sm font-bold mb-2">ID</label>
        <div className="w-full border rounded p-2 bg-gray-100">
          {id || "Auto-generated"}
        </div>
      </div> */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Cover Image URL</label>
        <input
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
