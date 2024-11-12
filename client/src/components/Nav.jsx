// Imports required React Modules
import { Link } from "react-router-dom";

// Imports required App Modules
// import NavBar from "./Navigation/Navbar";

// Map Method iterates through 'links' Array to generate List Item for each Link
export default function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'contentform', label: 'New Content Form' },
    { to: 'calendar', label: 'Calendar' },
    { to: 'search', label: 'Search' },
    { to: 'admin', label: 'Admin' },
    // { to: 'login', label: 'Login' },
    { to: 'createaccount', label: 'Create Account' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ); 
}