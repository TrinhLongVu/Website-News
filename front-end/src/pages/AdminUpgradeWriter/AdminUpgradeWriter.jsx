import React from "react";
import "./admin-upgrade-writer.css";

const AdminUpgradeWriter = () => {


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
                        <a href="/admin"><div className="admin-category">Priority</div></a>
                        <a href="/admin/upgrade-writer"><div className="admin-category admin-category-selected">Upgrade Writer</div></a>
                        <a href="/admin/reported-accounts"><div className="admin-category">Reported Account</div></a>
                        <a href="/admin/article-statistics"><div className="admin-category">Article Statistics</div></a>
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
                                    <td>Berglunds snabbkop</td>
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

export default AdminUpgradeWriter;
