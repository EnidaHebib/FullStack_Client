import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostDetails from "../components/PostDetails";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" }).then(
      () => {
        alert("Post deleted!");
        navigate("/");
      }
    );
  };

  const handleEdit = () => {
    navigate(`/create`, { state: post });
  };

  return post ? (
    <PostDetails post={post} onDelete={handleDelete} onEdit={handleEdit} />
  ) : (
    <p>Loading...</p>
  );
};

export default PostPage;
