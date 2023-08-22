import React, { useState } from "react";
import Form from "../comps/Form";

const Summary = ({ scores, handleGridChange, setProgress6 }) => {
  const [email, setemail] = useState("");

  function handleSubmit() {
    fetch("http://localhost:8080/api/summary", {
      method: "POST",
      "Content-Type": "application/json",
      headers: {},
      body: JSON.stringify({
        data: {
          receiver: email,
          text: scores,
        },
      }),
    });
  }

  return (
    <div className="flex flex-col gap-9 mt-8 items-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl capitalize font-medium tracking-wider">
          this score is a reflection of our performance based on previous
          factors{" "}
        </h3>
        <p className="text-lg text-center tracking-wide font-normal ">
          We have considered your relevant activities and treand to provide this
          score
        </p>
      </div>

      <div className="h-[150px] w-[600px] flex justify-between items-center p-3">
        <img src="" alt="img1" className="h-[100%] w-[30%]" />

        <img src="" alt="img2" className="h-[100%] w-[25%]" />

        <img src="" alt="img3" className="h-[100%] w-[25%]" />
      </div>

      <hr />
      <Form setemail={setemail} email={email} />

      <button
        onClick={() => {
          handleSubmit();
          console.log(scores);
          handleGridChange("");
          setProgress6((preVal) => !preVal);
        }}
        className="bg-violet-500 text-white font-medium px-[2rem] py-3 rounded-xl"
      >
        Sprawdz
      </button>
    </div>
  );
};

export default Summary;
