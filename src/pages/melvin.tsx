import React from "react";

interface MelvinProps {}

const Melvin: React.FC<MelvinProps> = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black flex justify-center align-middle items-center flex-col">
      <h1 className="text-5xl text-white">melvin</h1>
      <br />
      <div>
        <img width="500px" src="./melvin.jpeg" />
      </div>
      <p className="text-xl text-white">yes</p>
    </div>
  );
};

export default Melvin;
