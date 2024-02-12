import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/pricing">Home Page</Link>
        </li>
        <li>
          <Link to="/product">Home Page</Link>
        </li>
      </ul>
    </nav>
  );
}
