import React, { useEffect, useState } from "react";

import Cell from "../comps/Cell";

const GridThree = ({ handleGridChange, setScores, scores, setProgress4 }) => {
  const [groupThree, setGroupThree] = useState(null);
  const [g3Scores, setG3Scores] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/gridthree")
      .then((data) => data.json())
      .then((data) => setGroupThree(data.words));
  }, []);

  const handleWordPick = (selectWord) => {
    const newVal = groupThree.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroupThree(newVal);
  };

  const handleGroupScore = (word) => {
    if (word.active) {
      setG3Scores((preVal) => preVal - 2);
    }
    if (!word.active) {
      setG3Scores((preVal) => preVal + 2);
    }
    console.log(g3Scores);
  };

  const handleSubmit = () => {
    setScores({ ...scores, G3: g3Scores });
  };

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-5 lg:grid-cols-5 lg:gap-5">
        {groupThree?.map((word) => (
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
              handleGridChange(4);
              setProgress4((preVal) => !preVal);
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

export default GridThree;
