import { Link } from "react-router-dom";

export default function NavBar({ links }) {
  return (
    <nav>
      {/* <ul>
        {links.map((link) => link)}
      </ul> */}
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