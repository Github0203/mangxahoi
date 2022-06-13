import "./styles.css";
import "./comment.css";

import React, { useState, useEffect } from "react";
import data from "./data.json";

import { CommentSection } from "../../react-comments-section";
import "../../react-comments-section/dist/index.css";

import CustomInputt from "./CustomInputt";

const Comment = () => {
  const [comment, setComment] = useState(data);
  const userId = "01a";
  const avatarUrl = "https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg";
  const name = "xyz";
  const signinUrl = "/signin";
  const signupUrl = "/signup";
  let count = 0;
  comment.map((i) => {
    count += 1;
    i.replies && i.replies.map((i) => (count += 1));
  });


  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const customInputFunc = (props) => {
    return (
      <CustomInputt
        parentId={props.parentId}
        cancellor={props.cancellor}
        value={props.value}
        edit={props.edit}
        submit={props.submit}
        handleCancel={props.handleCancel}
      />
    );
  };

  

  return (
    <div className="cols">
      <div className="commentSection">
        <div className="header">
          {" "}
        </div>
        <CommentSection
          currentUser={
            userId && { userId: userId, avatarUrl: avatarUrl, name: name }
          }
          commentsArray={comment}
          setComment={setComment}
          signinUrl={signinUrl}
          signupUrl={signupUrl}
          customInput={customInputFunc}
        />
      </div>
    </div>
  );
};

export default Comment;
