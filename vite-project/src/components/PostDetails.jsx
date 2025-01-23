import React from 'react';

const PostDetails = ({ post, onDelete, onEdit }) => {
    return (
        <div className="container mx-auto max-w-lg">
            <img src={post.cover} alt={post.title} className="w-full h-60 object-cover rounded mb-4" />
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p className="mb-4">{post.content}</p>
            <div>
                <button onClick={onEdit} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                    Edit
                </button>
                <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
