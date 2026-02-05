import "./NavigationBar.css";
import { Link } from "react-router-dom";

interface LinkItem {
  label: string;
  url: string;
}

function NavigationBar({ links }: { links: LinkItem[] }) {
  return (
    <nav>
      {links.map((link, index) => (
        // Use a CSS class for spacing/styling
        <Link key={index} to={link.url} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
