import { useState } from "react";
import Pages from "./Pages";
import logo from "./assets/logo.jpg";
import ProgressBar from "./comps/ProgressBar";

function App() {
  const [grid, setGrid] = useState(1);
  const [progress1, setProgress1] = useState(true);
  const [progress2, setProgress2] = useState(false);
  const [progress3, setProgress3] = useState(false);
  const [progress4, setProgress4] = useState(false);
  const [progress5, setProgress5] = useState(false);
  const [progress6, setProgress6] = useState(false);

  const handleGridChange = (gridNumber) => setGrid(gridNumber);

  return (
    <div className="h-screen flex flex-col items-center space-y-20">
      <header className="w-full h-fit flex items-center justify-center py-5 gap-4 bg-[rgb(2,0,36)] backdrop-blur-md backdrop-filter bg-opacity-70 fixed">
        <img src={logo} className="w-10 h-10" alt="" />{" "}
        <h1> | Zaznacz slow, ktore znask! - {grid}</h1>
      </header>
      <Pages
        grid={grid}
        handleGridChange={handleGridChange}
        setProgress1={setProgress1}
        setProgress2={setProgress2}
        setProgress3={setProgress3}
        setProgress4={setProgress4}
        setProgress5={setProgress5}
        setProgress6={setProgress6}
      />

      <ProgressBar
        progress1={progress1}
        progress2={progress2}
        progress3={progress3}
        progress4={progress4}
        progress5={progress5}
        progress6={progress6}
      />
    </div>
  );
}

export default App;
