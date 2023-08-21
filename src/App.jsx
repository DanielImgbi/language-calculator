import { useState } from "react";
import Pages from "./Pages";
import logo from "./assets/logo.jpg";

function App() {
  const [grid, setGrid] = useState(1);

  const handleGridChange = (gridNumber) => setGrid(gridNumber);

  return (
    <div className="h-screen flex flex-col items-center space-y-20">
      <header className="w-full h-fit flex items-center justify-center py-5 gap-4 bg-gray-100 backdrop-blur-md backdrop-filter bg-opacity-70 fixed">
        <img src={logo} className="w-10 h-10" alt="" />{" "}
        <h1> | Zaznacz slow, ktore znask! - {grid}</h1>
      </header>
      <Pages grid={grid} handleGridChange={handleGridChange} />
    </div>
  );
}

export default App;
