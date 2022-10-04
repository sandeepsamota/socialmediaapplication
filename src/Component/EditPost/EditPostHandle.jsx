// import { MDBInput } from "mdb-react-ui-kit";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EditPostHandle = () => {
//   const [text, setText] = useState();
//   const [response, setResponse] = useState();

//   const editHandler = (id, userId) => {
//     console.log(id, userId);
//     fetch(`https://zn4fin-4000.preview.csb.app/api/post/update`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//       body: JSON.stringify({
//         postId: id,
//         text,
//       }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         const updatedpost = response.map((data) => data.id !== id);
//         console.log(res);
//         // setResponse(res?.data?.[0]);
//         setResponse(updatedpost);

//         if (res.success === true) {
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
//       <div className="editpostopeninput">
//         <MDBInput
//           className="editpostopeninput1"
//           placeholder="Edit Your Post"
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//         <button className="editpostbtn" onClick={() => editHandler()}>
//           Edit Post
//         </button>
//       </div>
//     </>
//   );
// };
// export default EditPostHandle;
