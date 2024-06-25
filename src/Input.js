import { useState } from "react";
import "./Input.css";

export default function Input() {
  const [postContent, setPostContent] = useState("");
  function enterHandler(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log("submitted: " + postContent);
    }
  }

  return (
    <textarea
      value={postContent}
      className="textArea"
      autoFocus
      maxLength={20}
      onChange={(e) => setPostContent(e.target.value)}
      placeholder="Type your input here"
      onKeyDown={enterHandler}
    />
  );
}
