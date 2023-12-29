import React from "react";
import "./admin-reported-accounts.css";

const AdminReportedAccounts = () => {
  return (
    <>
      <div className="reported-accounts-container">
        <table className="reported-accounts-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Report Reason</th>
              <th>Ban This User</th>
              <th>Ignore This User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Hate speech, violence, or threats</td>
              <td>
                <button className="reported-accounts-accept-button">Ban</button>
              </td>
              <td>
                <button className="reported-accounts-deny-button">Ignore</button>
              </td>
            </tr>
            <tr>
              <td>Berglunds snabbkop</td>
              <td>Contains illegal content or activity</td>
              <td>
                <button className="reported-accounts-accept-button">Ban</button>
              </td>
              <td>
                <button className="reported-accounts-deny-button">Ignore</button>
              </td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Misinformation</td>
              <td>
                <button className="reported-accounts-accept-button">Ban</button>
              </td>
              <td>
                <button className="reported-accounts-deny-button">Ignore</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminReportedAccounts;
