import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const ShowPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  function Signin(e) {
    e.preventDefault();

    fetch("https://zn4fin-4000.preview.csb.app/api/auth/signin", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res?.data[0]?.token);
        localStorage.setItem("name", res?.data[0]?.name);

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
            navigate("/Home");
          }, 3000);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {
      setEmail("");
      setPassword("");
    }, 4500);
  }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom ">
      <MDBRow>
        <MDBCol col="10" md="6">
          <h1>
            <input
              type="image"
              src={
                "https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-0bcc36b/wp-content/uploads/2019/12/logo-2.png"
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
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="divider d-flex align-items-center my-4 signinimage">
            <h1>Sign In</h1>
          </div>
          <form onSubmit={SignIn}>
            <span className="signinemail">
              Email Address
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                className="signinemail"
                value={email}
                type="email"
                size="lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
            <span className="signinpassword">
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
              <span className="signinshowpassword">
                <MDBCheckbox
                  name="flexCheck"
                  type="checkbox"
                  label="Show Password"
                  onClick={ShowPassword}
                  id="flexCheckDefault"
                />
              </span>
            </div>

            <div className="text-center text-md-start mt-4 pt-2 signinbtn">
              <button className="mb-0 px-5" size="lg" onClick={Signin}>
                Login
              </button>
              <ToastContainer />

              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to={"/SignUp"} className="link-danger">
                  Register
                </Link>
                <br />
                <Link to={"/ForgotPass"} className="forgotpassword">
                  Forgot password?
                </Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
