import React from "react";

const ProgressBar = ({
  progress1,
  progress2,
  progress3,
  progress4,
  progress5,
  progress6,
}) => {
  return (
    <div className="rounded-xl  flex items-center justify-between h-[200px] w-[450px]">
      <span
        className={`rounded-full ${
          progress1 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
      <span
        className={`rounded-full ${
          progress2 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
      <span
        className={`rounded-full ${
          progress3 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
      <span
        className={`rounded-full ${
          progress4 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
      <span
        className={`rounded-full ${
          progress5 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
      <span
        className={`rounded-full ${
          progress6 ? "bg-violet-500" : "bg-gray-200"
        } h-[100%] w-[13.4%] p-4`}
      ></span>
    </div>
  );
};

export default ProgressBar;
