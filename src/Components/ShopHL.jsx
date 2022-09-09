import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faKitchenSet,
  faLeaf,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
const ShopHL = () => {
  return (
    <div className="shophl w-2/4 xl:w-3/12">
      <div className="shopCont mb-4 xl:pt-1 xl:px-10 mx-2 text-center text-green-600">
        <div className="shop-features mx-2">
          <div className="justify-center"><FontAwesomeIcon icon={faUsers} size="3x"/></div>
          <h3 className="shTitle text-center font-semibold text-xl lg:font-semibold text-black p-4">
            People
          </h3>
          <p className="shDtls text-center text-left text-md  text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatibus inventore blanditiis fugiat, voluptatum quisquam eius! Perferendis consequatur officiis, aliquid odit harum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopHL;
