import React from "react";

function CreatePost() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="border rounded w-full p-2"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              className="border rounded w-full p-2"
              placeholder="Enter content"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Cover Image URL
            </label>
            <input
              id="image"
              type="text"
              className="border rounded w-full p-2"
              placeholder="Enter image URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
