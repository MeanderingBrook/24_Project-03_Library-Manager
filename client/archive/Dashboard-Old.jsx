// Imports required React Modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
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
      <nav>
        <div>Content Management System</div>
      </nav>

      {/* Left Pane */}
      <div>
        <div>
          <h2>Admin Panel</h2>
          <button onClick={handleDashboardClick}>Dashboard</button>
          <br />
          <br />
          <button onClick={handlePostsClick}>Posts</button>
        </div>
      </div>

      {/* Right Pane */}
      <div>
        {showPosts ? (
          <div>
            <h3>Posts</h3>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Genre</th>
                  <th>Copies Held</th>
                  <th>Copies Available</th>
                  <th>Status</th>
                  <th>Allow Comments</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.descr}</td>
                    <td>{item.genre}</td>
                    <td>{item.copiesHeld}</td>
                    <td>{item.copiesAvail}</td>
                    <td>{item.status}</td>
                    <td>{item.allowComment ? "Yes" : "No"}</td>
                    <td>{item.dateCreated}</td>
                    <td>
                      {posts.status === "Pending" && (
                        <>
                          <button onClick={() => handleApprove(item.id)}>
                            Approve
                          </button>
                          <button onClick={() => handleEdit(item)}>Edit</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Click on "Posts" to View Content</p>
        )}
      </div>

      {posts.length > 0 ? <h2>We Have Posts</h2> : <h2>No Posts</h2>}
      {!posts
        ? null
        : posts.map((item) => (
            <div key={item.id}>
              <h2>Title: {item.title}</h2>
              <p>Author: {item.author}</p>
              <p>Description: {item.descr}</p>
              <p>Genre: {item.genre}</p>
              <p>Copies Held: {item.copiesHeld}</p>
              <p>Copies Available: {item.copiesAvail}</p>
              <p>Status: {item.status}</p>
              <p>Allow Comment: {item.allowComment}</p>
              <p>Date Created: {item.dateCreated}</p>
            </div>
          ))}
    </div>
  );
}

export default Dashboard
