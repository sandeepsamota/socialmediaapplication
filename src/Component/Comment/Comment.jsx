import React from "react";
import { useState } from "react";
import "./Comment.css";

function Comment() {
  const [comment, setComment] = useState();
  const GetCommentPost = (id, userId) => {
    console.log(id, userId);
    fetch(`https://zn4fin-4000.preview.csb.app/api/comment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
        comment: commenttext,
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
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    setTimeout(() => {
      setComment();
    }, 4000);
  };
  return (
    <>
      <div className="postmodal2">
        <AccountCircleIcon
          className="postmodalicon3"
          style={{ color: "#1266f1" }}
        />
        <input
          className="postmodalinput2"
          placeholder="Write a comment...."
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>{" "}
        <button
          className="getcommentpost"
          onClick={GetCommentPost(value?.id, value?.userId)}
        >
          Post
        </button>
      </div>
    </>
  );
}

export default Comment;

// import React from "react";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import "./Comment.css";
// function Comment() {
//   const [commentText, setComment] = useState();
//   const GetCommentPost = (id, userId) => {
//     fetch("https://zn4fin-4000.preview.csb.app/api/comment/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//       body: JSON.stringify({
//         postId: id,
//         comment: commentText,
//       }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);

//         if (res.succes === true) {
//           toast.success(res.message, {
//             position: toast.POSITION.TOP_CENTER,
//             autoClose: 2000,
//           });
//         } else {
//           toast.error(res.message, {
//             position: toast.POSITION.TOP_CENTER,
//             autoClose: 2000,
//           });
//         }
//       });
//   };
//   return (
//     <>
//       <input
//         placeholder="write a comment"
//         onChange={(e) => setComment(e.target.value)}
//       ></input>
//       <button onClick={GetCommentPost}>Submit</button>
//     </>
//   );
// }
// export default Comment;
