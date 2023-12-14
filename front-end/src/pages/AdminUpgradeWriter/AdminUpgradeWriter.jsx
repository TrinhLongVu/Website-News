import React from "react";
import "./admin-upgrade-writer.css";

const AdminUpgradeWriter = () => {
  return (
    <>
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
            <td>
              <button className="upgrade-writer-accept-button">Accept</button>
            </td>
            <td>
              <button className="upgrade-writer-deny-button">Deny</button>
            </td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Become Writer</td>
            <td>
              <button className="upgrade-writer-accept-button">Accept</button>
            </td>
            <td>
              <button className="upgrade-writer-deny-button">Deny</button>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Become Writer</td>
            <td>
              <button className="upgrade-writer-accept-button">Accept</button>
            </td>
            <td>
              <button className="upgrade-writer-deny-button">Deny</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default AdminUpgradeWriter;
