import React from "react";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const token = JSON.stringify(localStorage.getItem("token")).replaceAll(
    '"',
    ""
  );
  console.log(token, "token");
  function LogOut() {
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/logout", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
          setTimeout(() => {
            navigate("/");
          }, 2800);
          localStorage.removeItem("token");
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
        localStorage.removeItem("name");
      });
  }

  return (
    <>
      <div className="navbar">
        <div className="navbaritems">
          <input
            type="image"
            className="image"
            src={
              "https://eplanetsoft.com/wp-content/uploads/2019/12/logo-2.png"
            }
            alt="logo"
          />
          <div className="btncomponent">
            <button className="homebtn">
              <Link to={"/Home"}>Home</Link>
            </button>
          </div>
          <div className="btncomponent">
            <button className="profilebtn">
              <Link to={"/Profile"}>Profile</Link>
            </button>
          </div>
          <div className="btncomponent">
            <button className="settingsbtn">
              <Link to={"/Settings"}>Settings</Link>
            </button>
          </div>
          <div className="btncomponent">
            <button className="logoutbtn" onClick={LogOut}>
              Sign Out
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
