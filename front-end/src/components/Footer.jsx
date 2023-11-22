import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/footer.css'

const Footer = () => {
    const today = new Date();

    return (
        <footer>
            <div className="foot-content">
                <div className="row-content">
                    <div className="mega-about">
                        <div className="foot-title">
                            <div className="pre-bean"></div>
                            <h3>The Mega Papers</h3>
                        </div>
                        <div className="mega-para">
                            This is an innovative digital platform designed to revolutionize the way we consume and engage with news. Our Website creates a seamless online space where writers and readers can connect and interact around the news.
                        </div>
                    </div>
                    <div className="categories">
                        <div className="foot-title">
                            <div className="pre-bean"></div>
                            <h3>Categories</h3>
                        </div>
                        <ul className="category-list">
                            <li><a href="">Culture</a></li>
                            <li><a href="">Fashion</a></li>
                            <li><a href="">Technology</a></li>
                            <li><a href="">Food</a></li>
                            <li><a href="">Health</a></li>
                            <li><a href="">Gaming</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row-content">
                    <div className="newsletter">
                        <div className="foot-title">
                            <div className="pre-bean"></div>
                            <h3>Newsletters</h3>
                        </div>
                        <form action="" className="mail-box">
                            <input type="email" className="mail-input" placeholder="Enter Your Email..."/>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </form>
                    </div>
                    <div className="social">
                        <div className="foot-title">
                            <div className="pre-bean"></div>
                            <h3>Social Network</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot-banner">
                <div> <a href="/policy">Privacy Policy | Terms & Conditions</a></div>
                <div>Copyright © The Mega Papers @ {today.getFullYear}</div>
            </div>
        </footer>
    )
}

export default Footer