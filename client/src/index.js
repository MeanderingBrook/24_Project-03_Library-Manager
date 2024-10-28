// Module 24 - Project 3: Library Manager Application
// React App (Frontend) Definition

// Initialize Client from /client
// Note: Initializes /client/src/index.js
// App is passed from App.js to index.js (See, root.render(), below)
// React Scripts: npm run start

// Imports required React Modules
import React from "react";
// Imports React-specific (browser) Router Modules
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

// Imports required App Modules
// Imports App used as wrapper for Child Elements (See router, below)
import App from "./App";
import ErrorPage from "./error-page";
import Contact from "./components/contact";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Import Pages and Components Files used in React Routes, immediately below
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Calendar from "./components/Calendar";
import ContentForm from "./components/ContentForm";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

// Defines React Routes and Components rendered in each Route
// Defines output rendered through 'Outlet' based on React Route enpoint (e.g., '/', '/calendar')
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // Defines Dashboard Route as Root (Home): 'index: true' feferences Root Path above, 'path: "/"'
        index: true,
        element: <Dashboard />,
      },
      {
        // Defines Calendar Route
        path: "/calendar",
        element: <Calendar />,
      },
      {
        // Defines Content Form Route
        path: "/contentform",
        element: <ContentForm />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/createaccount",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// Defines Root for DOM Management
// 'root' ID located in /public/index.html (Skeleton HTML file actually rendered)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders materials included in Root
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
