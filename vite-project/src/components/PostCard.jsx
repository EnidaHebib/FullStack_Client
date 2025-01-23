import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="border rounded p-4 shadow mb-4">
            <img src={post.cover} alt={post.title} className="w-full h-40 object-cover rounded mb-2" />
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post.id}`} className="text-blue-500 mt-2 block">Read More</Link>
        </div>
    );
};

export default PostCard;
