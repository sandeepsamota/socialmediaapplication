import React from "react";
import "./Settings.css";
import ResetPass from "../ResetPass/ResetPass";
import DeleteUser from "../DeleteUser/DeleteUser";
import { ToastContainer, toast } from "react-toastify";
import { MDBInput } from "mdb-react-ui-kit";

import LockOutlinedIcon from "../../../node_modules/@material-ui/icons/LockOutlined";
import LockOpenOutlinedIcon from "../../../node_modules/@material-ui/icons/LockOpenOutlined";

import "react-toastify/dist/ReactToastify.css";
import Navbar1 from "../Navbar/Navbar1";
import { useState } from "react";

function Settings() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUserName] = useState();
  const [dob, setDob] = useState();
  const getuserpublic = () => {
    fetch(
      "https://zn4fin-4000.preview.csb.app/api/auth/user-public?username=sandeepsamota002",
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  };
  function getUserPrivate() {
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/user-private", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  }
  function UpdateProfile() {
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        dob,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setUserName("");
      setDob("");
    }, 4000);
  }
  function Tophomepage() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <header>
        <Navbar1 />
      </header>
      <hr className="homepageheadingrow"></hr>
      <div className="settings">
        <h4>Update Profile</h4>
        <div className="updateprofile">
          <div className="updateprofilename">
            <span>
              Firstname
              <MDBInput
                wrapperClass="mb-4"
                className="firstname"
                value={firstName}
                type="text"
                size="lg"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </span>
            <span>
              Lastname
              <MDBInput
                wrapperClass="mb-4"
                className="lastname"
                value={lastName}
                type="text"
                size="lg"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </span>
          </div>
          <div className="updateusername">
            <span>
              username
              <MDBInput
                wrapperClass="mb-4"
                value={username}
                type="text"
                size="lg"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </span>
          </div>
          <div className="updatedob">
            <span>
              Date-Of-Birth
              <MDBInput
                wrapperClass="mb-4"
                value={dob}
                type="date"
                size="lg"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </span>
          </div>
          <div className="updateprofilebtn">
            <button className="updateprofilebtn1" onClick={UpdateProfile}>
              Update
            </button>
          </div>
        </div>
        <hr></hr>
        <h4>Update Password</h4>

        <div className="resetpassword">
          <ResetPass />
        </div>

        <hr className="settingshr"></hr>
        <h5>Switch Your Account To:</h5>

        <div className="publicorprivate">
          <div className="private">
            {/* <span>Switch Account to: </span> */}
            <button onClick={getUserPrivate}>
              <LockOutlinedIcon />
              Private
            </button>
          </div>
          <div className="public">
            <button onClick={getuserpublic}>
              <LockOpenOutlinedIcon />
              Public
            </button>
            <ToastContainer />
          </div>
        </div>
        <hr></hr>
        <h5>Want To Delete Your Account.....?</h5>

        <div className="deleteuser">
          <DeleteUser />
        </div>
      </div>
      <div className="footerbackgroud">
        <div className="divider d-flex align-items-center fottertopbtnplace">
          <h5 className="footertopbtn" onClick={Tophomepage}>
            TOP
          </h5>
        </div>
        <footer className="footer">
          <div className="resetbtn"></div>
        </footer>
      </div>
    </>
  );
}
export default Settings;
