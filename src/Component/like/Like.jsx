import React from "react";
import "./Like.css";
import FavoriteBorderOutlinedIcon from "../../../node_modules/@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "../../../node_modules/@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "../../../node_modules/@material-ui/icons/ShareOutlined";

function Like() {
  return (
    <>
      <div className="postmodalmedia2">
        <span className="postmodalmediaicon2">
          <FavoriteBorderOutlinedIcon
            style={{ color: "crimson" }}
          ></FavoriteBorderOutlinedIcon>{" "}
          Like
        </span>
        <span className="postmodalmediaicon2">
          <ChatBubbleOutlineOutlinedIcon
            style={{ color: "green" }}
          ></ChatBubbleOutlineOutlinedIcon>{" "}
          Comment
          {/* <MDBInput placeholder="Write Your Comment"></MDBInput> */}
        </span>
        <span className="postmodalmediaicon2">
          <ShareOutlinedIcon style={{ color: "orange" }}></ShareOutlinedIcon>{" "}
          Share
        </span>
      </div>
    </>
  );
}
export default Like;
