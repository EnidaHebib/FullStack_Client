import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts, onUpdate, onDelete, setPosts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onUpdate={onUpdate}
          onDelete={onDelete}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
};

export default PostList;
