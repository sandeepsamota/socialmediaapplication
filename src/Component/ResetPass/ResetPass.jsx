import React, { useState } from "react";
import "./ResetPass.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

function ResetPass() {
  const token = JSON.stringify(localStorage.getItem("token")).replaceAll(
    '"',
    ""
  );
  const [oldPassword, setoldPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  let navigate = useNavigate();
  function Resetpass() {
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/reset-pass", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
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
            navigate("/");
          }, 3000);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {}, 4500);
  }

  return (
    <>
      <div className="resetpassworddiv">
        <span className="verifypassword">
          Old Password
          <MDBInput
            wrapperClass="mb-4"
            value={oldPassword}
            type="text"
            size="lg"
            onChange={(e) => {
              setoldPassword(e.target.value);
            }}
          />
        </span>
        <span className="verifypassword">
          New Password
          <MDBInput
            className="newpassword"
            wrapperClass="mb-4"
            value={newPassword}
            type="text"
            size="lg"
            onChange={(e) => {
              setnewPassword(e.target.value);
            }}
          />
        </span>
        <div className="resetbtnclass">
          <button className="resetbtn1" onClick={Resetpass}>
            Change Password
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ResetPass;
