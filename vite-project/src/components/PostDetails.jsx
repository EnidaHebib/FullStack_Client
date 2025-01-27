// import React, { useState } from "react";
// import axios from "axios";

// // Handle user update //from chat gpt
// const [posts, setPosts] = useState([]);
// const handleUpdate = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.put(`http://localhost:3000/posts/${form.id}`, {
//       author: author,
//       title: title,
//       content: content,
//       cover: cover,
//     });
//     setForm({ author: "", title: "", content: "", cover: "" });
//     setIsUpdating(false);
//     fetchposts();
//   } catch (error) {
//     console.error("Error updating user:", error);
//   }
// };

// // Handle user deletion
// const handleDelete = async (id) => {
//   try {
//     await axios.delete(`http://localhost:3000/posts/${id}`);
//     fetchposts();
//   } catch (error) {
//     console.error("Error deleting post:", error);
//   }
// };

// // Handle setting update form
// const setUpdateForm = (posts) => {
//   setForm(posts);
//   setIsUpdating(true);

//   return (
//     <div className="p-5 font-sans">
//       <h1 className="text-2xl font-bold mb-5">Manage Post</h1>

//       {/* User List */}
//       <h2 className="text-xl font-semibold mb-3">Posts</h2>
//       <ul className="space-y-2">
//         {posts.map((us) => (
//           <li
//             key={user.id}
//             className="flex items-center justify-between bg-gray-100 p-3 rounded"
//           >
//             <span>
//               {author} {title} {content} {cover} {date}
//             </span>
//             <div className="space-x-2">
//               <button
//                 onClick={() => handleDelete(user.id)}
//                 className="text-red-600 hover:underline"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setUpdateForm(posts)}
//                 className="text-blue-600 hover:underline"
//               >
//                 Update
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//

// export default PostDetails;

import React from "react";

const PostDetails = ({ post, onDelete, onEdit }) => {
  return (
    <div className="container mx- max-w-lg">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
    </div>
  );
};

export default PostDetails;
