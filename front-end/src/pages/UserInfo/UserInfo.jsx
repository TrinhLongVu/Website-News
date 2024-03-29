import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./user-info.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Loader from "../../Components/Loader/Loader";
import { useNavigate, useOutletContext } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserInfo = () => {
  const { userChange, changeUser } = useOutletContext();
  const [infoObj, setInfoObj] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPending, setPending] = useState(false);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [changeAvt, setChangeAvt] = useState(null);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          if (json.body.Birthday) {
            const dateObj = new Date(json.body.Birthday);
            const formattedDate = format(dateObj, "yyyy-MM-dd");
            json.body.Birthday = formattedDate;
            setBirthday(json.body.Birthday);
          }
          if (json.body.pending) {
            if (json.body.pending === "true") {
              setPending(true);
            }
          }
          setFullName(json.body.FullName);
          setGender(json.body.Gender);
          setPhone(json.body.PhoneNumber);
          setAddress(json.body.Address);
          setInfoObj(json.body);
        } else {
          navigate("/");
        }
      });
  }, [isEditMode, isPending]);

  const formatDate = (date) => {
    const parts = date.split("-");
    const transformedDate = `${parts[1]}/${parts[2]}/${parts[0]}`;
    return transformedDate;
  };

  const saveInfoChanges = async () => {
    let formData = new FormData();
    formData.append("fullname", fullName);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("birthday", formatDate(birthday));
    if (changeAvt) {
      formData.append("image", changeAvt);
    }
    try {
      setUpdating(true);
      const response = await fetch(
        `http://localhost:8000/api/v1/user/${infoObj._id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Successfully update your information", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        changeUser(!userChange);
        setIsEditMode(false);
      } else {
        toast.error("Looks like you there is some error!!!\nPlease try again", {
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
      console.error("Error:", error);
    }
    setUpdating(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setChangeAvt(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInfoObj({ ...infoObj, Image_Avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const upgradeToWriter = () => {
    fetch("http://localhost:8000/api/v1/user/upgrade/writer/" + infoObj._id, {
      method: "PATCH",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          setPending(true);
        }
      });
  };

  const cancelUpgrade = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/denyUpgrade/" + infoObj._id,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        setPending(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Breadcrumbs crumbList={[{ name: "User Information", link: "/user" }]} />
      <div className="info-avt-container">
        <div className="info--avt">
          <div
            className="avatar-big"
            style={{ backgroundImage: `url(${infoObj.Image_Avatar})` }}
          ></div>
          {isEditMode && (
            <>
              <label htmlFor="info--avt-upload" className="info--avt-change">
                <FontAwesomeIcon icon={faEdit} id="info--avt-edit" />
                Change Avatar
              </label>
              <input
                type="file"
                id="info--avt-upload"
                onChange={handleAvatarChange}
              />
            </>
          )}
        </div>

        <div className="info">
          <div className="info-field">
            <h3 className="title-input">Full Name</h3>
            <input
              className="info-inp"
              type="text"
              placeholder="Unknown"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              readOnly={!isEditMode}
            />
          </div>
          <div className="info-field">
            <h3 className="title-input">Birthday</h3>
            <input
              className="info-inp"
              type="date"
              value={birthday}
              placeholder="Unknown"
              onChange={(e) => setBirthday(e.target.value)}
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Gender</h3>
            <input
              className="info-inp"
              type="text"
              id="gender"
              placeholder="Unknown"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Phone number</h3>
            <input
              className="info-inp"
              type="text"
              placeholder="Unknown"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              readOnly={!isEditMode}
            />
          </div>
          <div className="info-field">
            <h3 className="title-input">Address</h3>
            <input
              className="info-inp"
              type="text"
              placeholder="Unknown"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-action-row">
            {infoObj.Role === "reader" && !isPending ? (
              <div className="info-action-btn-container">
                <div
                  className="info-action-btn"
                  id="info-upgrade-btn"
                  onClick={upgradeToWriter}
                >
                  Upgrade to Writer
                </div>
              </div>
            ) : infoObj.Role === "reader" && isPending ? (
              <div className="info-action-btn-container">
                <div
                  className="info-action-btn"
                  id="info-upgrade-btn"
                  onClick={cancelUpgrade}
                >
                  Waiting to be approved
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {updating ? (
              <Loader />
            ) : (
              <div className="info-action-btn-container">
                {isEditMode ? (
                  <>
                    <div
                      className="info-action-btn"
                      id="info-save-btn"
                      onClick={saveInfoChanges}
                    >
                      Save
                    </div>
                    <div
                      className="info-action-btn"
                      onClick={setIsEditMode.bind(null, false)}
                    >
                      Cancel
                    </div>
                  </>
                ) : (
                  <div
                    className="info-action-btn"
                    onClick={setIsEditMode.bind(null, true)}
                  >
                    Change Information
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
