import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./breadcrumbs.css";

const Breadcrumbs = ({ crumbList }) => {
  return (
    <>
      <div class="breadcrumbs">
        {crumbList.reverse().map((crumb, index) => (
          <div key={index} className="crumb">
            <a href={crumb.link}>{crumb.name}</a>
          </div>
        ))}
        <div class="crumb">
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
