import Cell from "../comps/Cell";

import React, { useEffect, useState } from "react";

//this object below is the proptype for the reusable grid component

const mainProps = {
  groupWordUrl, // api endpoint for the required group
  handleGridChange, // function that changes grid pages
};

const Grid = ({ groupWordUrl, handleGridChange }) => {
  const [group, setGroup] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false); // this state handle submit effects

  /*

   the handleWordPick function handles the functionality of

   selecting and unselectiong the word which the user knows.

  */

  const handleWordPick = (selectWord) => {
    const newVal = group.map((word) =>
      selectWord.id === word.id ? { ...word, active: !word.active } : word
    );

    setGroup(newVal);
  };
  useEffect(() => {
    const fetchGroupWord = async () => {
      const promise = await fetch(groupWordUrl);

      if (promise.ok) setGroup(await promise.json());
    };

    fetchGroupWord().catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex flex-col space-y-0">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 lg:gap-5">
        {group.map((word) => (
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

export default Grid;
