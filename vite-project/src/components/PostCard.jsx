import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-sm text-gray-600">
        By {post.author} on {post.date}
      </p>
      <p className="mt-2">{post.content}</p>
      {post.cover && (
        <img src={post.cover} alt={post.title} className="mt-4 rounded" />
      )}
    </div>
  );
};

export default PostCard;
