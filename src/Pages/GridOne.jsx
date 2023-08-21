import React, { useEffect, useState } from "react";

import Cell from "../comps/Cell";

const GridOne = ({ handleGridChange, setScores, scores }) => {
  const [groupOne, setGroupOne] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [g1Scores, setG1Scores] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/gridone")
      .then((data) => data.json())
      .then((data) => setGroupOne(data.words));
  }, []);

  const handleWordPick = (selectWord) => {
    const newVal = groupOne.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroupOne(newVal);
  };

  const handleGroupScore = (word) => {
    if (word.active) {
      setG1Scores((preVal) => preVal - 2);
    }
    if (!word.active) {
      setG1Scores((preVal) => preVal + 2);
    }
  };

  const handleSubmit = () => {
    setScores({ ...scores, G1: g1Scores });
  };

  // console.log(g1Scores);

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 lg:gap-5">
        {groupOne?.map((word) => (
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
              handleGridChange(2);
              console.log(scores);
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

export default GridOne;
