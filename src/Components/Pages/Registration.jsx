import React, { useState, useEffect } from "react";
import Alert from "../Alert";
import { useAppContext } from "../Context/appContext";
import FormRow from "../FormRow";

const Registration = () => {
  const intialState = {
    name: "",
    email: "",
    password: "",
    hasAccount: true,
  };
  const [user, setUser] = useState(intialState);
  //Global variable
  const { isLoading, showAlert, displayAlert } = useAppContext();

  //Toggle login sign up
  const toggleUser = () => {
    setUser({ ...user, hasAccount: !user.hasAccount });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    //console.log(user);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, hasAccount } = user;
    if (!email || !password || (!hasAccount && !name)) {
      displayAlert();
      return;
    }
    console.log(user);
  };

  // const clickSubmit = (event) => {
  //   event.preventDefault();
  //   if (intialState.showAlert === false) {
  //     alert("Account has been registered succesfully.");
  //   } else {
  //     alert("Try again.");
  //   }
  // };
  return (
    <div className="bg-gradient-to-b from-green-200 to-transparent">
      <div className="max-w-screen-xl mx-auto pt-24">
        <div className="flex -h-screen justify-center items-center">
          <div className="w-full mx-12 sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-7/12">
            <div className="form__card bg-white p-14 rounded-md shadow-md border-t-[5px] border-green-500">
              <div className="logo__here">
                <h1 className="text-center">LOGO</h1>
              </div>
              <h1 className="text-center text-3xl my-3">
                {user.hasAccount ? "Log in" : "Register"}
              </h1>
              {showAlert && <Alert />}
              <form className="form" onSubmit={onSubmit}>
                {/* Name row input */}
                {!user.hasAccount && (
                  <FormRow
                    type="text"
                    name="name"
                    value={user.name}
                    handleChange={handleChange}
                  />
                )}
                {/* Name row input */}
                <FormRow
                  type="email"
                  name="email" 
                  value={user.email}
                  handleChange={handleChange}
                />
                {/* Name row input */}
                <FormRow
                  type="password"
                  name="password"
                  value={user.password}
                  handleChange={handleChange}
                />
                <div className="text-center">
                  <button
                    className="bg-green-500 text-lg text-white rounded-md my-5 py-2 px-3 ml-3 hover:bg-green-600"
                    // onClick={clickSubmit}
                  >
                    Register
                  </button>
                </div>
                <p className="text-center">
                  {user.hasAccount
                    ? " No account yet? "
                    : " Already have an account? "}
                  <button className="text-green-500" onClick={toggleUser}>
                    {user.hasAccount ? " Register " : " Log in "}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
