import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts, onUpdate, onDelete }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
