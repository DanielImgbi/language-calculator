import React, { useState } from "react";
import GridOne from "./GridOne";
import GridTwo from "./GridTwo";
import GridThree from "./GridThree";
import GridFour from "./GridFour";
import Summary from "./Summary";
import FinishScreen from "./FinishScreen";

const Pages = ({
  grid,
  handleGridChange,
  setProgress2,
  setProgress3,
  setProgress4,
  setProgress5,
  setProgress6,
}) => {
  const [scores, setScores] = useState({});

  switch (grid) {
    case 1:
      return (
        <GridOne
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
          setProgress2={setProgress2}
        />
      );
      break;
    case 2:
      return (
        <GridTwo
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
          setProgress3={setProgress3}
        />
      );
      break;
    case 3:
      return (
        <GridThree
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
          setProgress4={setProgress4}
        />
      );
      break;
    case 4:
      return (
        <GridFour
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
          setProgress5={setProgress5}
        />
      );
      break;
    case 5:
      return (
        <Summary
          scores={scores}
          handleGridChange={handleGridChange}
          setProgress6={setProgress6}
        />
      );
      break;
    default:
      return <FinishScreen />;
      break;
  }
};

export default Pages;
