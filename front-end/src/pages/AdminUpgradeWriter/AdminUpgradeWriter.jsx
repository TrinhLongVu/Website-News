import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import image from "../../assets/tech-tag.jpeg";
import "./admin-upgrade-writer.css";

const Admin = () => {


    return (
        <>
            <div className="admin-container">
                <div className="admin-header">
                    <div className="admin-logo">
                        THE MEGA PAPERS
                    </div>
                    <div className="admin-avt"></div>
                </div>

                <div className="admin-navbar-content">
                    <div className="admin-navbar">
                        <div className="admin-category">Priority</div>
                        <div className="admin-category">Upgrade Writer</div>
                        <div className="admin-category">Reported Account</div>
                        <div className="admin-category">Article Statistics</div>
                    </div>
                    <div className="admin-content">
                        <div className="upgrade-writer-container">
                            <table className="upgrade-writer-table">
                                <tr>
                                    <th>Username</th>
                                    <th>Request</th>
                                    <th>Accept</th>
                                    <th>Deny</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Become Writer</td>
                                    <td><button className="upgrade-writer-accept-button">Accept</button></td>
                                    <td><button className="upgrade-writer-deny-button">Deny</button></td>
                                </tr>
                                <tr>
                                    <td>Berglunds snabbköp</td>
                                    <td>Become Writer</td>
                                    <td><button className="upgrade-writer-accept-button">Accept</button></td>
                                    <td><button className="upgrade-writer-deny-button">Deny</button></td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Become Writer</td>
                                    <td><button className="upgrade-writer-accept-button">Accept</button></td>
                                    <td><button className="upgrade-writer-deny-button">Deny</button></td>
                                </tr>
                        
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
