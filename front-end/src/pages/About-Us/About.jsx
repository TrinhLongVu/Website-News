import "./about.css";

//npm install react-icon --save
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="home-about-container">
        <div className="home">
          <p>Home</p>
        </div>
        <div className="to"> {">"} </div>
        <div className="about">
          <p>about us</p>
        </div>
      </div>
      <div className="introduction">
        <div className="background">
          <div className="title">
            <p>This is the title for The Mega Papers introduction</p>
          </div>
          <div className="content">
            <p>
              Welcome to "Mega Papers," your premier destination for a multifaceted 
              digital news experience. From real-time updates in Breaking News to 
              in-depth analyses in Politics and Governance, we provide a 
              comprehensive view of global events. Explore the forefront of innovation 
              through our Technology and Innovation section, gain financial insights 
              in Business and Finance, and embark on a journey of scientific 
              discovery in Science and Exploration. Celebrate the richness of human 
              expression and lifestyle in our Culture and Lifestyle coverage, 
              and engage with thought-provoking analyses in our Opinion and Analysis 
              section. Mega Papers is your go-to platform for staying informed, 
              entertained, and connected to the diverse facets of our ever-evolving 
              world.
            </p>
          </div>
          <div className="intro-picture"></div>
        </div>
      </div>

      <div className="team-info-container">
        <div className="map"></div>
        <div className="info">
          <h3>
            <div className="rectangle"></div>
            Mega Papers Information
          </h3>
          <p>
            <AiOutlineMail /> Email: Management@MegaPapers.News
          </p>
          <p>
            <AiOutlinePhone /> Phone Number: +1(234)567-890
          </p>
          <p>
            <AiOutlineAim /> Address: 227D Nguyen Van Cu, Ward 4, District 5, Ho
            Chi Minh City
          </p>
          <p>
            <AiOutlineClockCircle /> Responding: 24h a day, 7 days a week
          </p>
        </div>
      </div>

      <div className="member-info-container">
        <div className="title-container">
          <h3>
            <div className="rectangle"></div>
            The Mega Papers Team
          </h3>

          {/* <div className = "rectangle"></div>
                    <div className = "info-title">
                        <p>The Mega Papers team</p>
                    </div> */}
        </div>
        <div className="member-list">
          <div className="member">
            <div className="member-avatar"></div>
            <div className="id">
              <p>21127xxx</p>
            </div>
            <div className="name">
              <p>Member 1</p>
            </div>
          </div>

          <div className="member">
            <div className="member-avatar"></div>
            <div className="id">
              <p>21127xxx</p>
            </div>
            <div className="name">
              <p>Member 2</p>
            </div>
          </div>

          <div className="member">
            <div className="member-avatar"></div>
            <div className="id">
              <p>21127xxx</p>
            </div>
            <div className="name">
              <p>Member 3</p>
            </div>
          </div>

          <div className="member">
            <div className="member-avatar"></div>
            <div className="id">
              <p>21127xxx</p>
            </div>
            <div className="name">
              <p>Member 4</p>
            </div>
          </div>

          <div className="member">
            <div className="member-avatar"></div>
            <div className="id">
              <p>21127xxx</p>
            </div>
            <div className="name">
              <p>Member 5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
