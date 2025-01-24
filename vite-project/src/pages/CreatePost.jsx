import React from 'react';
import PostForm from '../components/PostForm'; // Adjust the path to match your folder structure

const CreatePost = () => {
    const handleFormSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        // You can send the data to a backend API here using fetch or axios
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
            <PostForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default CreatePost;
