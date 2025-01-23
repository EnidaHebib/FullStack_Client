import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
    return (
        <div className="container mx-auto grid gap-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
