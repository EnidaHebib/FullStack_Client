import React, { useState } from "react";

const PostForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [cover, setCover] = useState(initialData.cover || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !cover) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ title, content, cover });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-lg">
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
