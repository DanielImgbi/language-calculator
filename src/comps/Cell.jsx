import React from "react";

const Cell = ({ word, handleWordPick, isSubmitted }) => {
  const handleSelected = () => {
    if (isSubmitted && !word.active) return "border-red-400";

    if (isSubmitted && word.active) return "border-green-400";

    if (!isSubmitted && (word.active || !word.active)) return "border-gray-400";
  };
  return (
    <div
      className={`w-36 min-h-[70px] px-2 py-1 flex flex-col  space-y-3 border-2 ${handleSelected()} rounded sm:w-48 sm:min-h-[75px]`}
    >
      <label className="flex justify-between space-x-5">
        <span>{word.text}</span>
        <input
          type="checkbox"
          name={word.text}
          onClick={() => handleWordPick(word)}
        />
      </label>
      <span>{isSubmitted && word.translation}</span>
    </div>
  );
};

export default Cell;
