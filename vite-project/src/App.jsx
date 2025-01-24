import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import './index.css'; // <-- Import Tailwind CSS here

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/posts/:id" element={<PostPage />} />
            </Routes>
        </Router>
    );
};

export default App;
