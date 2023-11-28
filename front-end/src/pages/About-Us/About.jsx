import "./about.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

//npm install react-icon --save
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

const About = () => {
    return (
        <>
            <Header/>
            <div className="home-about-container">
                <div className = "home">
                    <p>Home</p>
                </div>
                <div className = "to"> {'>'} </div>
                <div className = "about">
                    <p>about us</p>
                </div>
            </div>
            <div className = "introduction">
                <div className = "background">
                    <div className = "title">
                        <p>This is the title for The Mega Papers introduction</p>
                    </div>
                    <div className = "content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.</p>
                    </div>
                    <div className = "intro-picture"></div>
                </div>
            </div>

            <div className = "team-info-container">
                <div className = "map"></div>
                <div className = "info">
                    <h3><div className = "rectangle"></div>Mega Papers Information</h3>
                    <p><AiOutlineMail /> Email: Management@MegaPapers.News</p>
                    <p><AiOutlinePhone /> Phone Number: +1(234)567-890</p>
                    <p><AiOutlineAim /> Address: 227D Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh City</p>
                    <p><AiOutlineClockCircle /> Responding: 24h a day, 7 days a week</p>
                </div>
            </div>

            <div className = "member-info-container">
                <div className = "title-container">
                    <div className = "rectangle"></div>
                    <div className = "info-title">
                        <p>The Mega Papers team</p>
                    </div>
                </div>
                <div className = "member-list">
                    <div className = "member">
                        <div className = "member-avatar"></div>
                        <div className = "id">
                            <p>21127xxx</p>
                        </div>
                        <div className = "name">
                            <p>Member 1</p>
                        </div>
                    </div>

                    <div className = "member">
                        <div className = "member-avatar"></div>
                        <div className = "id">
                            <p>21127xxx</p>
                        </div>
                        <div className = "name">
                            <p>Member 2</p>
                        </div>
                    </div>

                    <div className = "member">
                        <div className = "member-avatar"></div>
                        <div className = "id">
                            <p>21127xxx</p>
                        </div>
                        <div className = "name">
                            <p>Member 3</p>
                        </div>
                    </div>

                    <div className = "member">
                        <div className = "member-avatar"></div>
                        <div className = "id">
                            <p>21127xxx</p>
                        </div>
                        <div className = "name">
                            <p>Member 4</p>
                        </div>
                    </div>

                    <div className = "member">
                        <div className = "member-avatar"></div>
                        <div className = "id">
                            <p>21127xxx</p>
                        </div>
                        <div className = "name">
                            <p>Member 5</p>
                        </div>
                    </div>

                </div>
            </div>


            <Footer/>
        </>
    )
}

export default About
