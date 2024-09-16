// React App (Frontend)
// Initialize from /client: npm run start

// Imports required React Modules
import axios from "axios";

// Imports required App Modules
import logo from "./logo.svg";
import "./App.css";

const apiCall = () => {
  // Requests Response from Express Server (/server/index.js) as call to app.get("/")
  axios.get("http://localhost:8080").then((data) => {
    // Data will log to Frontend (Browser) Console
    console.log(data);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={apiCall}>Execute API Call</button>
      </header>
    </div>
  );
}

export default App;
