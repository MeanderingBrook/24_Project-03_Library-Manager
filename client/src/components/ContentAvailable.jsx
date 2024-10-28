// Imports required Apollo Modules
import { useQuery } from "@apollo/client";

// Imports required App Modules
import { GET_AVAILABLE } from "../queries";

export default function ContentAvailable() {
  const { loading, error, data } = useQuery(GET_AVAILABLE);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  if (error) return console.log(JSON.stringify(error, null, 2));

  return (
    <div>
      <h2>Content Available</h2>
      <ul>
        {data.getAvailable.map((getAvailable) => (
          <li key={getAvailable.id}>
            {getAvailable.title} - {getAvailable.author} - {getAvailable.descr}{" "}
            - {getAvailable.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}
