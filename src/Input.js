// import { useState } from "react";
import "./Input.css";

export default function Input({
  postContent,
  enterHandler,
  setPostContent,
  inputRef,
  // onMouseUpHandler,
  onInputBlurHandler,
  onInputFocusHandler,
}) {
  return (
    <textarea
      ref={inputRef}
      value={postContent}
      className="textArea"
      autoFocus
      maxLength={20}
      onChange={(e) => setPostContent(e.target.value)}
      placeholder="Type your guess here"
      onKeyDown={enterHandler}
      onBlur={onInputBlurHandler}
      onFocus={onInputFocusHandler}
      // onMouseUp={onMouseUpHandler}
    />
  );
}
