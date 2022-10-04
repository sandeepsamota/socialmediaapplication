import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPass.css";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function ForgotPass() {
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  function Forgotpass(e) {
    e.preventDefault();

    fetch("https://zn4fin-4000.preview.csb.app/api/auth/forgot-pass", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
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
          toast.success(res.message || "", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/VerifyPass");
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
          <div className="divider d-flex align-items-center my-4">
            <h1>Forgot Password?</h1>
          </div>
          <form>
            <span className="forgotpassemail">
              Email Address
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                value={email}
                type="email"
                size="lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </span>

            <div className="text-center text-md-start mt-4 pt-2 btn1">
              <button
                className="forgotbtn mb-0 "
                size="lg"
                onClick={Forgotpass}
              >
                Forgot Password
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

export default ForgotPass;
