import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer({ now, setNow, nextMidnight }) {
  const [totalSecondsUntilMidnight, setTotalSecondsUntilMidnight] = useState(
    Math.floor((nextMidnight.getTime() - now.getTime()) / 1000)
  );
  const [secondsComponentUntilMidnight, setSecondsComponentUntilMidnight] =
    useState(totalSecondsUntilMidnight % 60);
  const [minutesComponentUntilMidnight, setMinutesComponentUntilMidnight] =
    useState(Math.floor((totalSecondsUntilMidnight % 3600) / 60));
  const [hoursComponentUntilMidnight, setHoursComponentUntilMidnight] =
    useState(Math.floor(totalSecondsUntilMidnight / 3600));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setTotalSecondsUntilMidnight(
      Math.floor((nextMidnight.getTime() - now.getTime()) / 1000)
    );
    setSecondsComponentUntilMidnight(totalSecondsUntilMidnight % 60);
    setMinutesComponentUntilMidnight(
      Math.floor((totalSecondsUntilMidnight % 3600) / 60)
    );
    setHoursComponentUntilMidnight(
      Math.floor(totalSecondsUntilMidnight / 3600)
    );
  }, [now.getTime()]);

  return (
    <h3 className="timerText">
      The next gun is in
      {" " +
        hoursComponentUntilMidnight +
        ":" +
        (minutesComponentUntilMidnight >= 10
          ? minutesComponentUntilMidnight
          : "0" + minutesComponentUntilMidnight) +
        ":" +
        (secondsComponentUntilMidnight >= 10
          ? secondsComponentUntilMidnight
          : "0" + secondsComponentUntilMidnight)}{" "}
    </h3>
  );
}
