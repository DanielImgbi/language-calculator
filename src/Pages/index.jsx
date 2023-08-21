import React, { useState } from "react";
import GridOne from "./GridOne";
import GridTwo from "./GridTwo";
import GridThree from "./GridThree";
import GridFour from "./GridFour";
import Summary from "./Summary";

const Pages = ({ grid, handleGridChange }) => {
  const [scores, setScores] = useState({});

  switch (grid) {
    case 1:
      return (
        <GridOne
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
        />
      );
      break;
    case 2:
      return (
        <GridTwo
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
        />
      );
      break;
    case 3:
      return (
        <GridThree
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
        />
      );
      break;
    case 4:
      return (
        <GridFour
          setScores={setScores}
          scores={scores}
          handleGridChange={handleGridChange}
        />
      );
      break;
    default:
      return <Summary scores={scores} />;
      break;
  }
};

export default Pages;
