// Imports required React Modules
import React, { useState, useEffect } from 'react';
import useNavigate from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Imports Dashboard Components to be rendered
import DashboardPosts from '../components/Dashboard/DashboardPosts';
import DashboardControl from '../components/Dashboard/DashboardControl';
import AdminTable from '../components/Admin/AdminTable';

// Defines Dashboard functionality (e.g., Button Functions) and Structure
export default function Dashboard() {
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState({
    title: "",
    author: "",
    descr: "",
    genre: "",
    copiesHeld: "",
    copiesAvail: "",
    status: "",
    allowComment: true,
    dateCreated: "",
  });
  const [editContent, setEditContent] = useState(null);

  useEffect(() => {
    axios
      .get("/cms") // Points to, http://localhost:8080/cms through package.json-defined Proxy
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error Fetching Content: ", error));
  }, []);

  const handleDashboardClick = () => {
    setShowPosts(false);
    setPosts([]);
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

  const handleEdit = (post) => {
    setEditContent(post);
  };

  return (
    <div className="app-container">
      {/* <h2>Content Management System</h2> */}
      {/* <DashboardControl handleDashboardClick={handleDashboardClick} handlePostsClick={handlePostsClick} /> */}
      {/* <DashboardTable showPosts={showPosts} posts={posts} handleApprove={handleApprove} handleEdit={handleEdit} /> */}
      <DashboardPosts posts={posts} />
      {/* <DashboardPosts showPosts={showPosts} posts={posts} /> */}
    </div>    
  );
}
