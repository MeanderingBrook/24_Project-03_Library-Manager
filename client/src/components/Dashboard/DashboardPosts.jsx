// Imports required React Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Defines detailed Posts display
export default function DashboardPosts({posts}) {
  return(
    <div>
      <h1 style={{color: "#0090C1"}}>Featured Content</h1>
      {/* {posts.length > 0 ? <h2>We Have Posts</h2> : <h2>No Posts</h2>} */}
      {!posts
        ? null
        : posts.map((item) => (
            <div className="posts" key={item.id}>
              <h2>
                <Link to={`/contentedit/${item._id}`}>Title: {item.title}</Link>
              </h2>
              <p>Author: {item.author}</p>
              <p>Content Type: {item.contentType}</p>
              <p>Description: {item.descr}</p>
              <p>Genre: {item.genre}</p>

              { item.contentType === 'Post' ? (
                <p>Post Content: {item.postContent}</p>
               ) : '' }

              { item.contentType !== 'Book' ? (
                <p>Resource URL: {item.url}</p>
               ) : '' }

              {/* <p>Resource URL: {item.url}</p> */}
              <p>Copies Held: {item.copiesHeld}</p>
              <p>Copies Available: {item.copiesAvail}</p>
              <p>Status: {item.status}</p>  
              {/* <p>Date Created: {item.dateCreated}</p> */}
            </div>
          ))}
    </div>
  )
}

