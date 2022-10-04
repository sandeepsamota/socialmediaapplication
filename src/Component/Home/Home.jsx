import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput } from "mdb-react-ui-kit";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Post from "../Modal/Post";
import AccountCircleIcon from "../../../node_modules/@material-ui/icons/AccountCircle";
import VideoCallOutlinedIcon from "../../../node_modules/@material-ui/icons/VideoCallOutlined";
import CollectionsOutlinedIcon from "../../../node_modules/@material-ui/icons/CollectionsOutlined";
import MoodOutlinedIcon from "../../../node_modules/@material-ui/icons/MoodOutlined";
// import DeleteOutlineOutlinedIcon from "../../../node_modules/@material-ui/icons/DeleteOutlineOutlined";
// import EditOutlinedIcon from "../../../node_modules/@material-ui/icons/EditOutlined";
// import FavoriteBorderOutlinedIcon from "../../../node_modules/@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "../../../node_modules/@material-ui/icons/Favorite";
import ChatBubbleOutlineOutlinedIcon from "../../../node_modules/@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "../../../node_modules/@material-ui/icons/ShareOutlined";
import AddOutlinedIcon from "../../../node_modules/@material-ui/icons/AddOutlined";
import MoreVertIcon from "../../../node_modules/@material-ui/icons/MoreVert";
// import { useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";

function Home() {
  const name = JSON.stringify(localStorage.getItem("name")).replaceAll('"', "");

  // let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [response, setResponse] = useState([]);

  const [like, setlikeResponse] = useState();

  const [text, setText] = useState();

  const [comment, setComment] = useState();

  useEffect(() => {
    GetAllPosts();
  }, []);

  const GetAllPosts = async () => {
    await fetch(
      `https://zn4fin-4000.preview.csb.app/api/post/get-all-posts-user?userId=${22}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res?.data?.[0]);
      });
    setTimeout(() => {
      GetAllPosts();
    }, 2000);
  };

  function Tophomepage() {
    window.scrollTo(0, 0);
  }

  const deleteHandler = (id, userId) => {
    console.log(id, userId);
    fetch(`https://zn4fin-4000.preview.csb.app/api/post/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // setResponse(res?.data?.[0]);
        const updatedData = response.filter((data) => data.id !== id);
        setResponse(updatedData);
        console.log(res);

        if (res.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          // setTimeout(() => {}, 3000);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  };
  const editHandler = (id, userId) => {
    console.log(id, userId);
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
        const updatedpost = response.map((data) => data.id !== id);
        console.log(res);
        // setResponse(res?.data?.[0]);
        setResponse(updatedpost);

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
  };
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
        comment: comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        userId = console.log(userId);

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
      setComment("");
    }, 4500);
  };

  const likeeventhandler = (id) => {
    console.log(id);
    fetch(`https://zn4fin-4000.preview.csb.app/api/like/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((likeres) => likeres.json())
      .then((likeres) => {
        setlikeResponse(likeres.success);
        console.log(like);

        if (likeres.success === true) {
          toast.success(
            likeres.message,
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            },
            document.getElementsByTagName(<FavoriteIcon />)
          );
        } else {
          toast.error(likeres.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  };

  const shareeventhandler = (id) => {
    console.log(id);
    fetch(`https://zn4fin-4000.preview.csb.app/api/share/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
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
  };
  const followeventhandler = (userId) => {
    console.log(userId);
    fetch(`https://zn4fin-4000.preview.csb.app/api/follow/add-follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        requestedUserId: userId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
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
  };

  return (
    <>
      <Navbar1 />
      <hr className="homepageheadingrow"></hr>

      <div className="home">
        <div className="getallpostdata">
          <div className="homemaindiv">
            <span className="tooltiptext">Add To Your Post</span>

            <div className="Modalbtn" onClick={() => setIsOpen(true)}>
              <div className="postmodal">
                <AccountCircleIcon
                  className="postmodalicon"
                  style={{ color: "#1266f1" }}
                />

                <span className="postmodalinput">
                  What's On Your Mind ? {name}
                </span>
              </div>

              <hr></hr>

              <div className="postmodalmedia">
                <span className="postmodalmediaicon">
                  <VideoCallOutlinedIcon
                    style={{ color: "crimson" }}
                  ></VideoCallOutlinedIcon>{" "}
                  Live/Video
                </span>

                <span className="postmodalmediaicon">
                  <CollectionsOutlinedIcon
                    style={{ color: "green" }}
                  ></CollectionsOutlinedIcon>
                  Image/Video
                </span>

                <span className="postmodalmediaicon">
                  <MoodOutlinedIcon
                    style={{ color: "orange" }}
                  ></MoodOutlinedIcon>
                  Feeling/Activity
                </span>
              </div>
            </div>

            {isOpen && <Post setIsOpen={setIsOpen} />}
          </div>
          {/* <div className="createpostheading">
            <button onClick={GetAllPosts}>Reload posts</button>
            <ToastContainer />
          </div> */}

          {response?.map((value, index) => {
            return (
              <>
                <div className="getpostdata">
                  <div className="userdeatilshomepage">
                    <div className="userdeatilshomepage1">
                      <span className="postusername">
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon=<AccountCircleIcon
                                style={{ color: "#1266f1" }}
                              />
                              checkedIcon=<AccountCircleIcon
                                style={{ color: "#1266f1" }}
                              />
                            />
                          }
                        />
                        <span className="likeposticon">{name}</span>
                      </span>
                    </div>
                    <div className="userdeatilshomepage2">
                      <span
                        className="followbtn"
                        onClick={() => followeventhandler(value?.userId)}
                      >
                        <AddOutlinedIcon
                          className="addmodalicon"
                          style={{ color: "#1266f1" }}
                        />
                        Follow{" "}
                      </span>

                      <div className="moreicontip">
                        <MoreVertIcon
                          style={{ color: "#808080" }}
                        ></MoreVertIcon>
                        {/* <span className="moreicontip">Add To Your Post</span> */}
                      </div>
                    </div>
                  </div>

                  <hr></hr>

                  <div className="postcontent" key={index}>
                    <div className="posttextcontent">{value?.text}</div>
                  </div>

                  <hr></hr>

                  <div className="postmodalmedia2">
                    <div
                      className="postmodalmediaicon3"
                      onClick={() => likeeventhandler(value?.id)}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteIcon style={{ color: "crimson" }} />}
                            checkedIcon={<FavoriteIcon />}
                          />
                        }
                      />
                      <span className="likeposticon">Like</span>
                    </div>

                    <span className="postmodalmediaicon2">
                      <ChatBubbleOutlineOutlinedIcon
                        style={{ color: "green" }}
                      ></ChatBubbleOutlineOutlinedIcon>{" "}
                      Comment
                    </span>

                    <span
                      className="postmodalmediaicon2"
                      onClick={() => shareeventhandler(value?.id)}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <ShareOutlinedIcon style={{ color: "orange" }} />
                            }
                            checkedIcon={
                              <ShareOutlinedIcon style={{ color: "orange" }} />
                            }
                          />
                        }
                      />
                      <span className="likeposticon">Share</span>
                    </span>
                  </div>
                  <hr></hr>

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
                      onClick={() => GetCommentPost(value?.id, value?.userId)}
                    >
                      Post
                    </button>
                  </div>

                  <div className="editpostopeninput">
                    <MDBInput
                      className="editpostopeninput1"
                      placeholder="Edit Your Post"
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                    <button
                      className="editpostbtn"
                      onClick={() => editHandler(value?.id, value?.userId)}
                    >
                      Edit Post
                    </button>
                  </div>

                  <br />

                  <div className="postdivbtn">
                    <button
                      className="deletepostbtn"
                      onClick={() => deleteHandler(value?.id, value?.userId)}
                    >
                      Delete Post
                    </button>

                    <ToastContainer />
                  </div>

                  <hr></hr>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="footerbackgroud">
        <div className="divider d-flex align-items-center fottertopbtnplace">
          <h5 className="footertopbtn" onClick={Tophomepage}>
            TOP
          </h5>
        </div>
        <footer className="footer">
          <div className="resetbtn"></div>
        </footer>
      </div>
    </>
  );
}

export default Home;
