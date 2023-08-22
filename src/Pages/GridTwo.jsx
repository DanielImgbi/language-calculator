import React, { useEffect, useState } from "react";

import Cell from "../comps/Cell";

const GridTwo = ({ handleGridChange, setScores, scores, setProgress3 }) => {
  const [groupTwo, setGroupTwo] = useState(null);
  const [g2Scores, setG2Scores] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/gridtwo")
      .then((data) => data.json())
      .then((data) => setGroupTwo(data.words));
  }, []);

  const handleWordPick = (selectWord) => {
    const newVal = groupTwo.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroupTwo(newVal);
  };

  const handleGroupScore = (word) => {
    if (word.active) {
      setG2Scores((preVal) => preVal - 2);
    }
    if (!word.active) {
      setG2Scores((preVal) => preVal + 2);
    }
    console.log(g2Scores);
  };

  const handleSubmit = () => {
    setScores({ ...scores, G2: g2Scores });
  };

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-5 lg:grid-cols-5 lg:gap-5">
        {groupTwo?.map((word) => (
          <Cell
            key={word.id}
            word={word}
            handleWordPick={handleWordPick}
            handleGroupScore={handleGroupScore}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      <div className="flex items-center justify-center py-2">
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
              handleGridChange(3);
              setProgress3((preVal) => !preVal);
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

export default GridTwo;
