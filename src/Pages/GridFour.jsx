import React, { useState, useEffect } from "react";

import Cell from "../comps/Cell";

const GridFour = ({ handleGridChange, setScores, scores, setProgress5 }) => {
  const [groupFour, setGroupFour] = useState(null);
  const [g4Scores, setG4Scores] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/gridfour")
      .then((data) => data.json())
      .then((data) => setGroupFour(data.words));
  }, []);

  const handleWordPick = (selectWord) => {
    const newVal = groupFour.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroupFour(newVal);
  };
  const handleGroupScore = (word) => {
    if (word.active) {
      setG4Scores((preVal) => preVal - 2);
    }
    if (!word.active) {
      setG4Scores((preVal) => preVal + 2);
    }
  };

  const handleSubmit = () => {
    setScores({ ...scores, G4: g4Scores });
  };

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 lg:gap-5">
        {groupFour?.map((word) => (
          <Cell
            key={word.id}
            word={word}
            handleWordPick={handleWordPick}
            handleGroupScore={handleGroupScore}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {!isSubmitted ? (
          <button
            onClick={() => {
              setIsSubmitted(true);
              handleSubmit();
            }}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Sprawdz
          </button>
        ) : (
          <button
            onClick={() => {
              handleGridChange(5);
              setProgress5((preVal) => !preVal);
            }}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Dalej
          </button>
        )}
      </div>
    </section>
  );
};

export default GridFour;
