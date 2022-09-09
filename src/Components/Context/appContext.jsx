//Hooks to be used
import React, { useReducer, useContext } from "react";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";
import reducer from "./reducer";

// Global Objects
const intialState = {
  usLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

//Declare context
//When delaring a context there should be either or both a receiver and a provider
//Here povider is used
const AppContext = React.createContext();
//Function
//Will wrap a component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  //Clear the alert

const clearAlert = () => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
    });
  }, 2000);
};

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, intialState, useAppContext };
