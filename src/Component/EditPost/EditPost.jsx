import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./EditPost.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPost = () => {
  // const [response, setResponse] = useState();
  const [text, setText] = useState();
  const editHandler = (id) => {
    console.log(id);
    fetch(`https://zn4fin-4000.preview.csb.app/api/post/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
        text,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // setResponse(res?.data?.[0]);
        console.log(res);

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {}, 3000);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  };
  return (
    <>
      <div className="editpostopeninput">
        <MDBInput
          className="editpostopeninput1"
          placeholder="Edit Your Post"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="editpostbtn" onClick={editHandler}>
          Edit Post
          <ToastContainer />
        </button>
      </div>
    </>
  );
};
export default EditPost;
