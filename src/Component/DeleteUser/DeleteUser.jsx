import React from "react";
import "./DeleteUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function DeleteUser() {
  const token = JSON.stringify(localStorage.getItem("token")).replaceAll(
    '"',
    ""
  );
  let navigate = useNavigate();
  function DeleteAccount() {
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/delete", {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      // body: JSON.stringify({
      //   token,
      //   password,
      // }),
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
    setTimeout(() => {}, 4500);
  }

  return (
    <>
      <div className="resetbtnclass">
        <button className="deleteaccountbtn1" onClick={DeleteAccount}>
          Delete Account
          <ToastContainer />
        </button>
      </div>
    </>
  );
}

export default DeleteUser;
