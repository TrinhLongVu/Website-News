import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import "./error-404.css";

import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="body-404">
        <div className="content-404">
          <div className="title-404">
            4
            <div className="paper-clip">
              <FontAwesomeIcon icon={faPaperclip} bounce />
            </div>
            4
          </div>
          <div className="explain-404">OOPS !!! SOMETHING WENT WRONG !!!</div>
          <div className="nav-btn">
            <a href="" className="btn-404">
              Go Back
            </a>
            <Link to="/" className="btn-404">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
