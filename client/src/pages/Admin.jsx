// Imports required React Modules
import React, { useState, useEffect } from 'react';
import useNavigate from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AdminTable from '../components/Admin/AdminTable';

export default function Admin() {
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const [editContent, setEditContent] = useState(null);

  const handleApprove = (id) => {
    axios
      .post("/cms/approve/${id}")
      .then((response) => {
        console.log(response.data);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, status: "Approved" } : post
          )
        );
      })
      .catch((error) => console.log("Error in Approving Post: ", error));
  };

  const handlePostsClick = () => {
  axios
    .get("http://localhost:8080/cms")
    .then((response) => {
      setPosts(response.data);
      setShowPosts(true);
    })
    .catch((error) => console.error("Error Fetching Posts: ", error));
  };

  const handleEdit = (post) => {
  setEditContent(post);
  };

  return (
  <div className="app-container">
    <h2>Administration Panel</h2>
    <button onClick={handlePostsClick}>Posts</button>
    <AdminTable showPosts={showPosts} posts={posts} handleApprove={handleApprove} handleEdit={handleEdit} />
    {/* <DashboardTable showPosts={showPosts} posts={posts} handleApprove={handleApprove} /> */}
    {/* <DashboardPosts showPosts={showPosts} posts={posts} /> */}
  </div>    
  );
}