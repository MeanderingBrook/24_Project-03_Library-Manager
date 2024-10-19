// Imports required React Modules
import { Link } from "react-router-dom";

// Imports required App Modules
// import NavBar from "./Navigation/Navbar";

// Map Method iterates through 'links' Array to generate List Item for each Link
export default function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'contentform', label: 'Content Form' },
    { to: 'calendar', label: 'Calendar' },
  ];

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

// export default function Nav() {
//   return (
//     <NavBar
//       links={[
//         <Link key={1} to={`/`}>
//           Home
//         </Link>,
//         <Link key={2} to={`contentform`}>
//           Content Form
//         </Link>,
//         <Link key={3} to={`calendar`}>
//           Calendar
//         </Link>
//       ]}
//     />
//   );
// }