import React from "react";
import { Link } from "react-router-dom";

function DropdownMenuNavBar(props) {
  const { title, links } = props;

  return (
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
        {title}
      </Link>
      <ul className="dropdown-menu">
        {links.map((link) => (
          <li key={link.url}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownMenuNavBar;
