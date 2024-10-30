// Imports required Apollo Modules
import { useQuery } from "@apollo/client";

// Imports required App Modules
import { GET_ALL_CONTENT } from "../queries";

export default function ContentData() {
  const { loading, error, data } = useQuery(GET_ALL_CONTENT);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  if (error) return console.log(JSON.stringify(error, null, 2));

  return (
    <div>
      <h2>Content Data</h2>
      <ul>
        {data.getAllContent.map((getAllContent) => (
          <li key={getAllContent.id}>
            {getAllContent.title} - {getAllContent.author} - {getAllContent.descr} -{" "}
            {getAllContent.genre} - {getAllContent.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
