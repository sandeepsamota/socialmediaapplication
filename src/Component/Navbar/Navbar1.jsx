import React from "react";
import "./Navbar1.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar1() {
  const token = JSON.stringify(localStorage.getItem("token")).replaceAll(
    '"',
    ""
  );
  let navigate = useNavigate();
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
      <div className="maninnavbar">
        <div className="navbar1">
          <input
            type="image"
            className="image"
            src={
              "https://eplanetsoft.com/wp-content/uploads/2019/12/logo-2.png"
            }
            alt="logo"
          />
        </div>
        <div className="navbar2">
          <Navbar expand="lg" className="fluidcontainer">
            <Container className="fluidcontainer">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "400px" }}
                  navbarScroll
                >
                  <div className="btncomponent">
                    <button className="homebtn">
                      <Link to={"/Home"}>Home</Link>
                    </button>
                  </div>
                  {/* <div className="btncomponent">
                    <button className="profilebtn">
                      <Link to={"/Profile"}>Profile</Link>
                    </button>
                  </div> */}
                  <div className="btncomponent">
                    <button className="settingsbtn">
                      <Link to={"/Settings"}>Settings</Link>
                    </button>
                  </div>
                  <div className="logoutbtncomponent">
                    <button className="logoutbtn" onClick={LogOut}>
                      Sign Out
                    </button>
                    <ToastContainer />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
