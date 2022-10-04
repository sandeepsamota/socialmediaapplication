import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VerifyUser.css";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function VerifyUser() {
  const [token, setToken] = useState();
  let navigate = useNavigate();

  function Verifuser(e) {
    e.preventDefault();

    fetch(
      `https://zn4fin-4000.preview.csb.app/api/auth/verify?token=${token}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
            navigate("/");
          }, 3000);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {
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
            <h1>Verify User</h1>
          </div>
          <form>
            <span>
              OTP
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                value={token}
                type="text"
                size="lg"
                onChange={(e) => {
                  setToken(e.target.value);
                }}
              />
            </span>

            <div className="text-center text-md-start mt-4 pt-2 verifybtn1">
              <button
                className="mb-0 px-5 verifybtn"
                size="lg"
                onClick={Verifuser}
              >
                Verify Email
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

export default VerifyUser;
