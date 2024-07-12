import "./App.css";
import TextBox from "./Input.js";
import Popover from "./Popover.js";
import { NAMEDATA, GUNDATA } from "./Data.js";
import ResultsTable from "./ResultsTable.js";
import { useState, useRef } from "react";

export default function App() {
  console.log("render");
  const [clickedList, setClickedList] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [secretGun, setSecretGun] = useState(NAMEDATA[Math.floor(Math.random() * NAMEDATA.length)]);
  const [submittedNames, setSubmittedNames] = useState([]);
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef(null);
  const [allowPopover, setAllowPopover] = useState(true);
  const possibleMatches = postContent ? NAMEDATA.map((str) => [
        str,
        str.toLowerCase().indexOf(postContent.toLowerCase()),
      ])
        .filter((tuple) => tuple[1] !== -1)
        .sort((a, b) => a[1] - b[1])
        .map((tuple) => tuple[0])
        .filter((str) => !submittedNames.includes(str))
    : [];
  // console.log(GUNDATA[secretGun]);
  function listClickHandler(name) {
    // alert("clicked!");
    setSubmittedNames([...submittedNames, name]);
    setPostContent("");
    setClickedList(true);
    // inputRef.current.focus();
    onInputFocusHandler();
    // console.log(clickedList);
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
    // console.log("focused");
    setAllowPopover(true);
  }
  function onInputBlurHandler() {
    // console.log(clickedList);
    if (!clickedList) {
      // console.log("blurred");
      setAllowPopover(false);
    } else {
      inputRef.current.focus();
    }
    setClickedList(false);
  }
  // function onMouseUpHandler() {
  //   console.log("mouseUP");
  //   if (blurred) {
  //     console.log("inputfocus set to false");
  //     setAllowPopover(false);
  //   }
  // }
  return (
    <div className="Wrapper0">
      <h3>{secretGun}</h3>
      <h1 className="title">Apex Gundle</h1>
      {!gameWon ?
        <div className="Wrapper1">
          <TextBox
            postContent={postContent}
            enterHandler={enterHandler}
            setPostContent={setPostContent}
            inputRef={inputRef}
            // onMouseUpHandler={onMouseUpHandler}
            onInputBlurHandler={onInputBlurHandler}
            onInputFocusHandler={onInputFocusHandler}
          />
          {possibleMatches.length > 0 && allowPopover && (
            <Popover
              possibleMatches={possibleMatches}
              listClickHandler={listClickHandler}
            />
          )}
        </div>
      :
        <>
          <h2 className="winMessage"> YOU WIN!</h2>
          <h3 className="gunReveal"> The gun was {secretGun}</h3>
        </>
      }
      <ResultsTable submittedNames={submittedNames} GUNDATA={GUNDATA} secretGunData={GUNDATA[secretGun]} secretGun={secretGun} setGameWon={setGameWon}/>
    </div>
  );
}
