import { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

// Wrap this on the app (index.js file) to provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
