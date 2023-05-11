import { Link } from "react-router-dom";


function MoreLink({ to, children }) {
  return (
    <Link to={to} className="more-link">
      {children}
    </Link>
  );
}

export default MoreLink;







