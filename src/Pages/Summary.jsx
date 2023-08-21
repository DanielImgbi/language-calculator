import React, { useState } from "react";

const Summary = ({ scores }) => {
  const [email, setemail] = useState("");

  function handleSubmit() {
    fetch("http://localhost:8080/api/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
          this score is a reflection fo our performance based on previous
          factors{" "}
        </h3>
        <p className="text-lg text-center tracking-wide font-normal ">
          We have considered your relevant activities and treand to provide this
          score
        </p>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-5 items-start">
          <p>Name</p>{" "}
          <input
            className="w-full px-3 py-5 border-2 border-gray-300 rounded-xl"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p>Surname</p>{" "}
          <input
            className="w-full px-3 py-5 border-2 border-gray-300 rounded-xl"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p>Email</p>{" "}
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-3 py-5 border-2 border-gray-300 rounded-xl"
            type="text"
            required
          />
        </div>
        <div className="flex gap-8 items-center">
          <p>Age</p>{" "}
          <select
            className="shadow-md px-3 py-3 bg-white outline-none border-none"
            name=""
            id=""
          >
            <option value="">select an option</option>
            <option value="">18-25</option>
            <option value="">26-35</option>
            <option value="">36-45</option>
            <option value="">46-55</option>
            <option value="">56+</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-4">
          <input type="checkbox" className="" name="" id="" />
          <p className="text-xl capitalize">i agree to privacy policy</p>
        </div>
      </div>

      <button
        onClick={() => {
          handleSubmit();
          console.log(scores);
        }}
        className="bg-violet-500 text-white font-medium px-[2rem] py-3 rounded-xl"
      >
        Sprawdz
      </button>
    </div>
  );
};

export default Summary;
