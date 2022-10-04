import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
// import Home from "../Home/Home";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  let navigate = useNavigate();

  const ShowPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  function Signup(e) {
    e.preventDefault();

    fetch("https://zn4fin-4000.preview.csb.app/api/auth/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        dob,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // res.success == true
        //   ? toast.success("Successfully Regsister !", {
        //       position: toast.POSITION.TOP_CENTER,
        //     })
        //   : toast.error("Invalid Data !", {
        //       position: toast.POSITION.TOP_CENTER,
        //     });

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/SignUp/VerifyUser");
          }, 3000);
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
      setEmail("");
      setPassword("");
      setDob("");
    }, 4500);
    // let userinfo = JSON.parse(localStorage.setItem([email]));
  }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom ">
      <MDBRow>
        <MDBCol col="10" className="signupcoloumn1" lg="6">
          <h1>
            <input
              type="image"
              src={
                "https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-8f111d9/wp-content/uploads/2019/12/logo-2.png"
              }
              alt="logo"
            />
          </h1>

          <input
            type="image"
            src={
              "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            }
            className="img-fluid"
            alt="Sample image"
          />
          <br />
        </MDBCol>

        <MDBCol col="10" className="signupcoloumn2" lg="6">
          <br />
          <div className="signupdivider d-flex align-items-center my-4 ">
            <h1>Register With Us</h1>
            <br />
          </div>
          <form>
            <div className="name">
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
            <span className="username">
              Username
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
            <span className="email">
              Email
              <MDBInput
                wrapperClass="mb-4"
                value={email}
                type="text"
                size="lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
            <span className="password">
              Password
              <MDBInput
                wrapperClass="mb-4"
                value={password}
                id="myInput"
                type="password"
                size="lg"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </span>
            <div className="d-flex justify-content-between mb-4">
              <span className="showpassword">
                <MDBCheckbox
                  name="flexCheck"
                  type="checkbox"
                  label="Show Password"
                  onClick={ShowPassword}
                  id="flexCheckDefault"
                />
              </span>
            </div>
            <span className="dob">
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
            <div className="text-center text-lg-start mt-4 pt-2 btn">
              <button className="mb-0 px-5" size="lg" onClick={Signup}>
                SignUp
              </button>
              <ToastContainer />
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account?{" "}
                <Link to="/" className="link-danger">
                  SignIn
                </Link>
                <br />
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
