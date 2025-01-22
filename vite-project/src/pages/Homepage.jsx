import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

const Homepage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-4">Travel Blog</h1>
            <PostList posts={posts} />
        </div>
    );
};

export default Homepage;
