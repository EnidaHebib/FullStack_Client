import React from 'react';

const PostList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p className="text-center text-gray-500">No posts available.</p>;
    }

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
                    <img
                        src={post.image || 'https://via.placeholder.com/300'} // Replace with actual image URL
                        alt={post.title}
                        className="rounded-t-lg w-full h-48 object-cover"
                    />
                    <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
                    <a
                        href={`/posts/${post.id}`}
                        className="text-blue-500 mt-4 block hover:underline"
                    >
                        Read More
                    </a>
                </div>
            ))}
        </>
    );
};

export default PostList;
