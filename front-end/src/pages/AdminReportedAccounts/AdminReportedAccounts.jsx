import { useState, useEffect } from "react";
import "./admin-reported-accounts.css";

const AdminReportedAccounts = () => {
  const [reportList, setReportList] = useState([]);
  const [actionHit, hitAction] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/admin/getReportPending", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setReportList(json.data);
      });
  }, [actionHit]);
  const banAuthor = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/admin/AcceptBanWriter/" + id,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        hitAction(!actionHit);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ignoreRequest = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/admin/DenyBanWriter/" + id,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        hitAction(!actionHit);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            {reportList.map((reported) => (
              <tr key={reported._id}>
                <td>{reported.FullName}</td>
                <td>
                  <button
                    className="upgrade-writer-accept-button"
                    onClick={() => banAuthor(reported._id)}
                  >
                    Ban
                  </button>
                </td>
                <td>
                  <button
                    className="upgrade-writer-deny-button"
                    onClick={() => ignoreRequest(reported._id)}
                  >
                    Ignore
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

export default AdminReportedAccounts;
