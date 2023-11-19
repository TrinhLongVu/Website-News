import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import "../styles/error-404.css"

const Error404 = () => {
    return (
        <>
            <Header/>
            <div className="body-404">
                <div className="content-404">
                <div className="title-404">
                    4
                    <div className="paper-clip"><FontAwesomeIcon icon={faPaperclip} bounce/></div>
                    4</div>
                <div className="explain-404">OOPS !!! SOMETHING WENT WRONG !!!</div>
                <div className="nav-btn">
                    <a href="" className="btn-404">Go Back</a>
                    <a href="" className="btn-404">Go Home</a>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Error404