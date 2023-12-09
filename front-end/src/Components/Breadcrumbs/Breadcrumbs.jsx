import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./breadcrumbs.css";

import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbList }) => {
  return (
    <>
      <div class="breadcrumbs">
        {crumbList.reverse().map((crumb, index) => (
          <Link to={crumb.link} className="crumb">
            {crumb.name}
          </Link>
        ))}
        <Link to="/" className="crumb">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </>
  );
};

export default Breadcrumbs;
