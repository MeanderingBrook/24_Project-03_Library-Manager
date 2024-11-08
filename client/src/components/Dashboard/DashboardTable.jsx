// Imports required React Modules
import React from 'react';

// Defines Posts Table
export default function DashboardTable({showPosts, posts, handleApprove, handleEdit}) {
  return (
    <div>
      {showPosts ? (
        <div>
          <h3>Posts</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Content Type</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Copies Held</th>
                <th>Copies Available</th>
                <th>Status</th>
                {/* <th>Allow Comments</th> */}
                <th>Date Created</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.contentType}</td>
                  <td>{item.descr}</td>
                  <td>{item.genre}</td>
                  <td>{item.copiesHeld}</td>
                  <td>{item.copiesAvail}</td>
                  <td>{item.status}</td>
                  {/* <td>{item.allowComment ? "Yes" : "No"}</td> */}
                  <td>{item.dateCreated}</td>
                  {/* FIX THIS !!! */}
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
  ) 
}