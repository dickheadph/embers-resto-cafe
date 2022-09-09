import React from "react";

const Ttiles = (props) => {
  return (
    <div>
      <div className="container mt-24 mb-10 ml-10">
        <h1 className="title font-normal text-2xl text-green-700 underline underline-offset-8 decoration-4 decoration-green-300">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Ttiles;
