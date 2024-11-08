// Imports required React Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Defines detailed Posts display
export default function DashboardPosts({posts}) {
  return(
    <div>
      {/* {posts.length > 0 ? <h2>We Have Posts</h2> : <h2>No Posts</h2>} */}
      {!posts
        ? null
        : posts.map((item) => (
            <div key={item.id}>
              {/* <h2>Title: {item.title}</h2> */}
              {/* FIX THIS !!! LINK SCROLLS FURTHER DOWN PAGE !!! */}
              <h2>
                <Link to={`/contentedit/${item._id}`}>Title: {item.title}</Link>
              </h2>
              {/* <p>ID: {item._id}</p> */}
              {/* <Link to={`/contentedit/${item._id}`}>{item.title}</Link> */}
              <p>Author: {item.author}</p>
              <p>Content Type: {item.contentType}</p>
              <p>Description: {item.descr}</p>
              <p>Genre: {item.genre}</p>
              <p>Copies Held: {item.copiesHeld}</p>
              <p>Copies Available: {item.copiesAvail}</p>
              <p>Status: {item.status}</p>
              {/* <p>Allow Comment: {item.allowComment}</p> */}
              <p>Date Created: {item.dateCreated}</p>
            </div>
          ))}
    </div>
  )
}

