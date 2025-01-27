import React from "react";

const PostDetails = ({ post, onDelete, onEdit }) => {
  return (
    <div className="container mx- max-w-lg">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
    </div>
  );
};

export default PostDetails;
