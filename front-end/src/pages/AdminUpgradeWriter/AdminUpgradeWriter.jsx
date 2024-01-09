import { useState, useEffect } from "react";
import "./admin-upgrade-writer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUpgradeWriter = () => {
  const [pendingList, setPendingList] = useState([]);
  const [actionHit, hitAction] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/pending/getAll", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setPendingList(json.data);
      });
  }, [actionHit]);

  const acceptRequest = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/updateReaderToWriter/" + id,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        hitAction(!actionHit);
        toast.success(`Successfully upgrade user to writer.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Something's error. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const denyRequest = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/denyUpgrade/" + id,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        hitAction(!actionHit);
        toast.success("Successfully denied user to writer.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Something's error. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
