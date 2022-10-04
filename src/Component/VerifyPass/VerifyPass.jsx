import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VerifyPass.css";
import {
  MDBContainer,
  MDBCol,
  MDBCheckbox,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function VerifyPass() {
  const [token, setToken] = useState(
    JSON.stringify(localStorage.getItem("token")).replaceAll('"', "")
  );
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
  function Verifypass(e) {
    e.preventDefault();

    fetch("https://zn4fin-4000.preview.csb.app/api/auth/verify-forgot", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        token,
        password,
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
          toast.success(res.msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          toast.error(res.msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {
      setPassword("");
      setToken("");
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
                "https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-8f111d9/wp-content/uploads/2019/12/logo-2.png"
              }
              alt="logo"
            />
          </h1>

          <input
            type="image"
            src={
              "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            }
            className="img-fluid1"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="verifydivider d-flex align-items-center my-4">
            <h1>Verify Password</h1>
          </div>
          <form>
            <span>
              OTP
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                className="verifyemail"
                // value={token}
                type="text"
                size="lg"
                onChange={(e) => {
                  setToken(e.target.value);
                }}
              />
            </span>
            <span className="verifypassword">
              New Password
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
            {/* <span className="verifypassword">
              Confirm Password
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
            </span> */}
            <div className="d-flex justify-content-between mb-4">
              <span className="verifyshowpassword">
                <MDBCheckbox
                  name="flexCheck"
                  type="checkbox"
                  label="Show Password"
                  onClick={ShowPassword}
                  id="flexCheckDefault"
                />
              </span>
            </div>

            <div className="text-center text-md-start mt-4 pt-2 verifybtn1">
              <button
                className="mb-0 px-5 verifybtn"
                size="lg"
                onClick={Verifypass}
              >
                Verify Password
              </button>
              <ToastContainer />

              <p className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account?{" "}
                <Link to="/" className="link-danger">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default VerifyPass;
