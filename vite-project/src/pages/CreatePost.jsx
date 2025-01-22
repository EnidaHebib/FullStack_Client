import React from 'react';
import PostForm from '../components/PostForm';

const CreatePost = () => {
    const handleSubmit = (post) => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        }).then(() => alert('Post created!'));
    };

    return <PostForm onSubmit={handleSubmit} />;
};

export default CreatePost;
