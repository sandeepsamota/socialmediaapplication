import React from "react";
import "./DeletePost.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DeletePost() {
  let navigate = useNavigate();
  //   const [response, setResponse] = useState();
  // const id = JSON.stringify(localStorage.getItem("postId").replaceAll('"', ""));
  //   const userId = JSON.stringify(
  //     localStorage.getItem("userId").replaceAll('"', "")
  //   );

  const deleteHandler = () => {
    console.log();
    fetch(`https://zn4fin-4000.preview.csb.app/api/post/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        // postId: localStorage.getItem("postId"),
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
  };
  return (
    <>
      <div className="postdivbtn">
        <button className="deletepostbtn" onClick={deleteHandler}>
          Delete Post
        </button>

        <ToastContainer />
      </div>
    </>
  );
}

export default DeletePost;
