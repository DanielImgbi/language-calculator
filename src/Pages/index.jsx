import React from "react";
import GridOne from "./GridOne";
import GridTwo from "./GridTwo";
import GridThree from "./GridThree";
import GridFour from "./GridFour";
import Summary from "./Summary";

const Pages = ({ grid, handleGridChange }) => {
  switch (grid) {
    case 1:
      return <GridOne handleGridChange={handleGridChange} />;
      break;
    case 2:
      return <GridTwo handleGridChange={handleGridChange} />;
      break;
    case 3:
      return <GridThree handleGridChange={handleGridChange} />;
      break;
    case 4:
      return <GridFour handleGridChange={handleGridChange} />;
      break;
    default:
      return <Summary />;
      break;
  }
};

export default Pages;
