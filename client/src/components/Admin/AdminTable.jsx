// Imports required React Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Defines Posts Table
export default function AdminTable({showPosts, posts, handleApprove, handleEdit}) {
  return (
    <div>
      {showPosts ? (
        <div>
          <h3>Posts</h3>
          <table>
            <thead>
              <tr>
                <th>Content Type</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Resource URL</th>
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
                  <td>{item.contentType}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.descr}</td>
                  <td>{item.genre}</td>
                  <td>{item.url}</td>
                  <td>{item.copiesHeld}</td>
                  <td>{item.copiesAvail}</td>
                  <td>{item.status}</td>
                  {/* <td>{item.allowComment ? "Yes" : "No"}</td> */}
                  <td>{item.dateCreated}</td>
                  {/* FIX THIS !!! */}
                  <td>
                    {item.status === "Pending" && (
                      <>
                        <button onClick={() => handleApprove(item.id)}>
                          Approve
                        </button>
                        <Link to={`/contentedit/${item._id}`}>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </Link>
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