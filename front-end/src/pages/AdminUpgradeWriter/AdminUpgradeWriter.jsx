import { useState, useEffect } from "react";
import "./admin-upgrade-writer.css";

const AdminUpgradeWriter = () => {
  const [pendingList, setPendingList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/pending/getAll", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setPendingList(json.data);
      });
  }, []);

  const acceptRequest = (id) => {
    console.log("Accept upgrade writer request with " + id);
  };

  const denyRequest = (id) => {
    console.log("Deny upgrade writer request with " + id);
  };

  return (
    <>
      <div className="upgrade-writer-container">
        <table className="upgrade-writer-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Accept</th>
              <th>Deny</th>
            </tr>
          </thead>
          <tbody>
            {pendingList.map((pending) => (
              <tr key={pending._id}>
                <td>{pending.FullName}</td>
                <td>
                  <button
                    className="upgrade-writer-accept-button"
                    onClick={() => acceptRequest(pending._id)}
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button
                    className="upgrade-writer-deny-button"
                    onClick={() => denyRequest(pending._id)}
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUpgradeWriter;
