// import { useState } from "react";
import "./Input.css";

export default function Input({
  postContent,
  enterHandler,
  setPostContent,
  inputRef,
  onInputBlurHandler,
  onInputFocusHandler
}) {
  return (
    <textarea
      ref={inputRef}
      value={postContent}
      className="textArea"
      autoFocus
      maxLength={20}
      onChange={(e) => setPostContent(e.target.value)}
      placeholder="Type your input here"
      onKeyDown={enterHandler}
      onBlur={onInputBlurHandler}
      onFocus={onInputFocusHandler}
    />
  );
}
