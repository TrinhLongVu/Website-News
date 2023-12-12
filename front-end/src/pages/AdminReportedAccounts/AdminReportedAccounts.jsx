import React from "react";
import "./admin-reported-accounts.css";

const AdminReportedAccounts = () => {


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
                        <div className="reported-accounts-container">
                            <table className="reported-accounts-table">
                                <tr>
                                    <th>Username</th>
                                    <th>Report Reason</th>
                                    <th>Ban This User</th>
                                    <th>Ignore This User</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Hate speech, violence, or threats</td>
                                    <td><button className="reported-accounts-accept-button">Ban</button></td>
                                    <td><button className="reported-accounts-deny-button">Ignore</button></td>
                                </tr>
                                <tr>
                                    <td>Berglunds snabbkop</td>
                                    <td>Contains illegal content or activity</td>
                                    <td><button className="reported-accounts-accept-button">Ban</button></td>
                                    <td><button className="reported-accounts-deny-button">Ignore</button></td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Misinformation</td>
                                    <td><button className="reported-accounts-accept-button">Ban</button></td>
                                    <td><button className="reported-accounts-deny-button">Ignore</button></td>
                                </tr>
                        
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminReportedAccounts;
