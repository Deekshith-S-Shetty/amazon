// All the states are declared in the initialState
export const initialState = {
  basket: [],
  user: null,
};

// Performs the given action on the data and returns the result
const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
