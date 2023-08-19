import React, { useState } from "react";

import Cell from "../comps/Cell";
import { group3 } from "../tools/groups";

const GridThree = ({ handleGridChange }) => {
  const [groupThree, setGroupThree] = useState(group3);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWordPick = (selectWord) => {
    const newVal = groupThree.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroupThree(newVal);
  };

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-5 lg:grid-cols-5 lg:gap-5">
        {groupThree.map((word) => (
          <Cell
            key={word.id}
            word={word}
            handleWordPick={handleWordPick}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      <div className="flex items-center justify-center py-2">
        {!isSubmitted ? (
          <button
            onClick={() => setIsSubmitted(true)}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => handleGridChange(4)}
            className="bg-violet-500 px-10 rounded py-2 text-white transition font-semibold text-lg hover:scale-105"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default GridThree;
