// Imports required React Modules
import React from 'react';

// Defines detailed Posts display
export default function DashboardPosts({posts}) {
  return(
    <div>
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
  )
}

