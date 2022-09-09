import React from "react";
import food from "D:/Web-Dev/Embersx/reactx/src/images/2- Categories/chinese.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
const BestSellers = () => {
  return (
    <div className="container_card lg:w-3/12 w-2/4 flex flex-wrap justify-center items-center">
      <div className="w-full bg-gradient-to-b from-transparent to-green-200 p-3 rounded-2xl mx-2 mb-4">
        <img src={food} className="rounded-t-2xl" />
        <h3 className="prodname">Chinese Food</h3>
        <h5 className="text-green-700 text-sm">
          <FontAwesomeIcon icon={faDollarSign} color="orange" size="lg" />
          &nbsp; 436 &nbsp;
          <span className="subInfo">
            <em>
              {" "}
              4.9 <FontAwesomeIcon icon={faHeart} color="red"/>
            </em>
          </span>
        </h5>
        <p className="prodinfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi
          culpa laborum minima.
        </p>
        <div className="text-center mt-2">
          <button
            className="inline text-green-700 text-sm bg-white py-2 px-3 rounded-sm hover:bg-slate-100 mb-3"
            type="button"
          >
            Bag food
          </button>
          <button
            className="inline text-white text-sm bg-green-600 py-2 px-3 rounded-sm hover:bg-green-700 mb-2 mx-2"
            type="button"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
