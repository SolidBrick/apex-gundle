import { useState, useRef, useEffect } from "react";
import Rand, { PRNG } from "rand-seed";
import Cookies from "js-cookie";
import ReactGA from "react-ga4";
import "./App.css";
import TextBox from "./Input.js";
import Popover from "./Popover.js";
import { NAMEDATA, GUNDATA } from "./Data.js";
import ResultsTable from "./ResultsTable.js";

export default function App() {
  const today = new Date();
  const nextMidnight = Math.floor(today.getTime / 86400000) + 86400000;
  const rand = new Rand("seed");
  const [clickedList, setClickedList] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [secretGun, setSecretGun] = useState();
  const [submittedNames, setSubmittedNames] = useState([]);
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef(null);
  const [allowPopover, setAllowPopover] = useState(true);
  const possibleMatches = postContent
    ? NAMEDATA.map((str) => [
        str,
        str.toLowerCase().indexOf(postContent.toLowerCase()),
      ])
        .filter((tuple) => tuple[1] !== -1)
        .sort((a, b) => a[1] - b[1])
        .map((tuple) => tuple[0])
        .filter((str) => !submittedNames.includes(str))
    : [];
  ReactGA.initialize("G-8BEZJ2Z0P8");
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Apex Gundle",
  });
  useEffect(() => {
    for (
      let i = 0;
      i < Math.floor((today.getTime() - 1720670400000) / 86400000);
      i++
    ) {
      rand.next();
    }
    setSecretGun(NAMEDATA[Math.floor(rand.next() * NAMEDATA.length)]);
  }, []);

  useEffect(() => {
    if (Cookies.get("numGuesses") != null) {
      setSubmittedNames(JSON.parse(Cookies.get("guesses")));
    }
  }, []);

  useEffect(() => {
    if (submittedNames.length !== 0) {
      console.log(submittedNames);
      console.log(secretGun);
      updateGuessCookies();
    }
  }, [submittedNames]);

  function updateGuessCookies() {
    Cookies.set("numGuesses", submittedNames.length, { expires: nextMidnight });
    Cookies.set("guesses", JSON.stringify(submittedNames), {
      expires: nextMidnight,
    });
  }

  function listClickHandler(name) {
    setSubmittedNames([...submittedNames, name]);
    setPostContent("");
    setClickedList(true);
    onInputFocusHandler();
    updateGuessCookies();
  }

  function enterHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (possibleMatches.length > 0) {
        setSubmittedNames([...submittedNames, possibleMatches[0]]);
        setPostContent("");
      }
    }
    updateGuessCookies();
  }

  function onInputFocusHandler() {
    setAllowPopover(true);
  }

  function onInputBlurHandler() {
    if (!clickedList) {
      setAllowPopover(false);
    } else {
      inputRef.current.focus();
    }
    setClickedList(false);
  }

  return (
    <div className="Wrapper0">
      <h1 className="title">Apex Gundle</h1>
      {!gameWon ? (
        <>
          <div className="Wrapper1">
            <TextBox
              postContent={postContent}
              enterHandler={enterHandler}
              setPostContent={setPostContent}
              inputRef={inputRef}
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
          <h3 className="numGuessText">
            Number of guesses: {submittedNames.length}
          </h3>
        </>
      ) : (
        <>
          <h2 className="winMessage"> YOU WIN!</h2>
          <h3 className="winNumGuessText">
            You took {submittedNames.length}{" "}
            {submittedNames.length > 1 ? "guesses" : "guess"}
          </h3>
          <h3 className="gunReveal"> The gun was {secretGun}</h3>
        </>
      )}
      <ResultsTable
        submittedNames={submittedNames}
        GUNDATA={GUNDATA}
        secretGunData={GUNDATA[secretGun]}
        secretGun={secretGun}
        setGameWon={setGameWon}
      />
    </div>
  );
}
