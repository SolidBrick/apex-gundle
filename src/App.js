import "./App.css";
import TextBox from "./Input.js";
import Popover from "./Popover.js";
import { DATA } from "./Data.js";
import { useState, useRef } from "react";

export default function App() {
  const [submittedNames, setSubmittedNames] = useState([]);
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef(null);
  const possibleMatches = postContent
    ? DATA.map((str) => [str, str.search(postContent.toLowerCase())])
        .filter((tuple) => tuple[1] !== -1)
        .sort((a, b) => a[1] - b[1])
        .map((tuple) => tuple[0])
        .filter((str) => !submittedNames.includes(str))
    : [];
  console.log(possibleMatches);
  function listClickHandler(name) {
    // alert(possibleMatches[0]);
    setSubmittedNames([...submittedNames, name]);
    setPostContent("");
    inputRef.current.focus();
  }
  function enterHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (possibleMatches) {
        // alert(possibleMatches[0]);
        setSubmittedNames([...submittedNames, possibleMatches[0]]);
        setPostContent("");
      }
    }
  }
  return (
    <div className="Rapper">
      <TextBox
        postContent={postContent}
        enterHandler={enterHandler}
        setPostContent={setPostContent}
        inputRef={inputRef}
      />
      {possibleMatches.length > 0 && (
        <Popover
          possibleMatches={possibleMatches}
          onListClick={listClickHandler}
        />
      )}
    </div>
  );
}
