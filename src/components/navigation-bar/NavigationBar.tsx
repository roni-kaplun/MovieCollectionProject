import "./NavigationBar.css";
import { Link } from "react-router-dom";

function NavigationBar({
  links,
}: {
  links: {
    label: string;
    url: string;
  }[];
}) {
  return (
    <nav>
      {links.map((link, index) => (
        <Link key={index} to={link.url}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
