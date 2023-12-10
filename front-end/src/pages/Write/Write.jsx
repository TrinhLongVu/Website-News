import "./write.css";
import wallpaper from "../../assets/social-tag.jpeg"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineCloudUpload } from "react-icons/ai";


const Write = () =>{
    const userInfo = {
        name: "JerryPham",
        avatar: "https://i.pravatar.cc/301",
    };
    return (
        <>
            <Header/>
            <div className = "body">
                <img className = "wallpaper" src = {wallpaper}></img>
                <div className= "taskbar">
                    <div className = "avatar" 
                    style={{ backgroundImage: `url(${userInfo.avatar})`}}
                    ></div>
                    <div className = "username">JerryPham</div>
                    <div className = "taskbar-function">
                        <div className = "item">Marked</div>
                        <div className = "item">Send Post</div>
                        <div className = "item">Posts</div>
                        <div className = "edit-profile">
                            <FontAwesomeIcon icon={faUserPen}/> Edit Profile
                        </div>
                    </div>
                </div>
                <div className = "create-article">
                    <div className = "article-content">
                        <div className = "article-header">
                            <div className = "article-header-item">
                                <h4>Title</h4>
                                <input className = "header-fill-in" type = "text"></input>
                            </div>
                            <div className = "article-header-item">
                                <h4>Add Tag</h4>
                                <input className = "header-fill-in"></input>
                            </div>
                        </div>
                        <div className= "write-article">
                            <h4>Content</h4>
                            <div className = "write-background">
                                <div className = "write-function">
                                    <div className = "write-item"><FontAwesomeIcon icon={faImage}/> Image</div>
                                    <div className = "write-item"><FontAwesomeIcon icon={faEyeDropper}/> Color</div>
                                    <div className = "write-item"><FontAwesomeIcon icon={faCode}/> Text</div>
                                    <div className = "write-item"><FontAwesomeIcon icon={faAlignLeft}/> Align</div>
                                    <div className = "write-item"><FontAwesomeIcon icon={faLink}/> Link</div>
                                </div>
                                <div className = "write-area">
                                    <input className = "write-content" type = "text" placeholder = "Type ..."></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-image">
                        <h4>Add Image</h4>
                        <div className="parent">
                            <div className="file-upload">
                                <AiOutlineCloudUpload size={140}/>
                                <h3>Click Here To Upload Image</h3>
                                <input type="file" />
                            </div>
                        </div>
                        <div className = "check-and-post">
                            <div className="check-item"><FontAwesomeIcon icon={faFloppyDisk}/> Draft</div>
                            <div className="check-item"><FontAwesomeIcon icon={faEye}/> Preview</div>
                            <div className="post-item"><FontAwesomeIcon icon={faPaperPlane}/> Public</div>
                        </div>
                    </div>
                </div>             
            </div>
            <Footer/>
        </>
    )
}

export default Write;