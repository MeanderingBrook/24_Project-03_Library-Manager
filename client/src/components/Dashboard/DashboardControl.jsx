// Imports required React Modules
import React from 'react';

// Defines Dashboard Buttons (Admin Panel)
export default function DashboardControl({handleDashboardClick, handlePostsClick}) {
  return (
    <div>
      <div>
        <h2>Admin Panel</h2>
        <button onClick={handleDashboardClick}>Dashboard</button>
        <br />
        <br />
        <button onClick={handlePostsClick}>Posts</button>
      </div>
    </div>
  ) 
}