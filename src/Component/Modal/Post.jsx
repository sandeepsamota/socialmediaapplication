import React, { useState } from "react";
import SATP from "../Modal/SATP.png";
import "./Post.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AccountCircleOutlined } from "@material-ui/icons";
import GroupIcon from "../../../node_modules/@material-ui/icons/Group";
import ArrowDropDownIcon from "../../../node_modules/@material-ui/icons/ArrowDropDown";
import CollectionsOutlinedIcon from "../../../node_modules/@material-ui/icons/CollectionsOutlined";
import MoreHorizOutlinedIcon from "../../../node_modules/@material-ui/icons/MoreHorizOutlined";
import MoodOutlinedIcon from "../../../node_modules/@material-ui/icons/MoodOutlined";
import LoyaltyOutlinedIcon from "../../../node_modules/@material-ui/icons/LoyaltyOutlined";
import PinDropOutlinedIcon from "../../../node_modules/@material-ui/icons/PinDropOutlined";
import FlagOutlinedIcon from "../../../node_modules/@material-ui/icons/FlagOutlined";
// import { useNavigate } from "react-router-dom";

const Post = ({ setIsOpen }) => {
  const token = JSON.stringify(localStorage.getItem("token")).replaceAll(
    '"',
    ""
  );
  const [text, setText] = useState("");
  // let navigate = useNavigate();

  function Postyourpost(e) {
    e.preventDefault();

    fetch("https://zn4fin-4000.preview.csb.app/api/post/create", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        text,
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
          setIsOpen(false);
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  }

  return (
    <>
      <div className="postmodaldivbackground">
        <div className="centerdmodaldiv">
          <h3 className="tagline">Create post</h3>
          <hr></hr>
          <div className="profilesectionmodal">
            <AccountCircleOutlined
              className="postmodalusericon"
              style={{ color: "#1266f1" }}
            />
            <span className="anchor">Sandeep Samota</span>

            <div className="friendsbtndiv">
              <GroupIcon
                className="friendsiconmodal"
                style={{ fontSize: "large" }}
              />
              <span className="friendsbtn">Friends</span>
              <ArrowDropDownIcon
                className="friendsiconmodal"
                style={{ fontSize: "large" }}
              />
            </div>
            <textarea
              rows="4"
              className="postinputmodal"
              placeholder="What's On Your Mind ?"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
            <br />

            <img type="image" className="imagemodal" src={SATP} alt="color" />
          </div>
          <div className="postmodalmedia1">
            <input
              className="postinputmodal1"
              placeholder="Add to Post"
            ></input>
            <div className="postmodalmedia1icon">
              <span>
                <CollectionsOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "#44bf0f" }}
                ></CollectionsOutlinedIcon>
              </span>
              <span>
                <LoyaltyOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "#1266f1" }}
                ></LoyaltyOutlinedIcon>
              </span>

              <span>
                <MoodOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "orange" }}
                ></MoodOutlinedIcon>
              </span>
              <span>
                <PinDropOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "crimson" }}
                ></PinDropOutlinedIcon>
              </span>
              <span>
                <FlagOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "skyblue" }}
                ></FlagOutlinedIcon>
              </span>
              <span>
                <MoreHorizOutlinedIcon
                  className="postmodalmediaicon1"
                  style={{ color: "#808080" }}
                ></MoreHorizOutlinedIcon>
              </span>
            </div>
          </div>
          <div className="postmodalbtn">
            <button className="cancelbtn" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button className="postbtn" onClick={Postyourpost}>
              Post
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
