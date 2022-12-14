import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
const CircularProgressBar = ({ value, text }) => {
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (score < value) {
      setTimeout(() => {
        setScore(score + 1), setPercentage(score + 1);
      }, 50);
    }
  }, [score]);

  return (
    <CircularProgressbar
      value={score}
      text={`${percentage}%`}
      className="p-2"
      styles={buildStyles({
        pathColor: `deeppink`,
        textColor: "#FC00C4",
        trailColor: "blueviolet",
        backgroundColor: "coral",
      })}
    />
  );
};

export default CircularProgressBar;
