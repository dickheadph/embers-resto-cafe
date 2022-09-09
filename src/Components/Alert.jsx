import React from "react";
import { useAppContext } from "./Context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`${alertType} border-[1px] bg-red-200 border-red-500 text-lg text-center  py-2 px-3 mx-3 rounded-lg w-full`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
