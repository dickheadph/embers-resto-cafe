import React from "react";

const FormRow = ({ type, name, user, handleChange, labelText }) => {
  return (
    <div className="form__row">
      <label htmlFor={name} className="text-lg ml-3 mtt-3">
        {labelText || name}
        <input
          type={type}
          name={name}
          value={user}
          onChange={handleChange}
          className="bg-slate-300/40 w-full rounded-md outline-none border-[2px] hover:border-green-700 py-3 px-3 mx-3 mt-2"
        ></input>
      </label>
    </div>
  );
};

export default FormRow;
