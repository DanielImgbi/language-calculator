import React, { useEffect, useState } from "react";

import Cell from "../comps/Cell";
import { group1 } from "../tools/groups";

const GridOne = ({ handleGridChange }) => {
  const [words, setWords] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/gridone")
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  });

  const handleWordPick = (selectWord) => {
    const newVal = words.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setWords(newVal);
  };

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 lg:gap-5">
        {words?.map((word) => (
          <Cell
            key={word.id}
            word={word}
            handleWordPick={handleWordPick}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {!isSubmitted ? (
          <button
            onClick={() => setIsSubmitted(true)}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => handleGridChange(2)}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default GridOne;
