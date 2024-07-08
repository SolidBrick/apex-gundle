import "./App.css";
import TextBox from "./Input.js";
import Popover from "./Popover.js";
import { NAMEDATA, GUNDATA } from "./Data.js";
import ResultsTable from "./ResultsTable.js";
import { useState, useRef } from "react";

export default function App() {
  const [secretGun, setSecretGun] = useState(NAMEDATA[Math.floor(Math.random() * NAMEDATA.length)]);
  const [submittedNames, setSubmittedNames] = useState([]);
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(true);
  const possibleMatches = postContent ? NAMEDATA.map((str) => [
        str,
        str.toLowerCase().indexOf(postContent.toLowerCase()),
      ])
        .filter((tuple) => tuple[1] !== -1)
        .sort((a, b) => a[1] - b[1])
        .map((tuple) => tuple[0])
        .filter((str) => !submittedNames.includes(str))
    : [];
  console.log(secretGun);
  // console.log(GUNDATA[secretGun]);
  function listClickHandler(name) {
    alert(possibleMatches[0]);
    setSubmittedNames([...submittedNames, name]);
    setPostContent("");
    //inputRef.current.focus();
    //setInputFocused(true);
  }
  function enterHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (possibleMatches.length > 0) {
        // alert(possibleMatches[0]);
        setSubmittedNames([...submittedNames, possibleMatches[0]]);
        setPostContent("");
      }
    }
  }
  function onInputFocusHandler() {
    setInputFocused(true);
  }
  function onInputBlurHandler() {
    setInputFocused(false)
  }
  return (
    <div className="Wrapper0">
      <h1 className="title">Apex Gundle</h1>
      <div className="Wrapper1">
        <TextBox
          postContent={postContent}
          enterHandler={enterHandler}
          setPostContent={setPostContent}
          inputRef={inputRef}
          onInputBlurHandler={onInputBlurHandler}
          //onInputFocusHandler={onInputFocusHandler}
        />
        {possibleMatches.length > 0 && inputFocused && (
          <Popover
            possibleMatches={possibleMatches}
            onListClick={listClickHandler}
          />
        )}
      </div>
      <ResultsTable submittedNames={submittedNames} GUNDATA={GUNDATA} secretGunData={GUNDATA[secretGun]}/>
    </div>
  );
}
