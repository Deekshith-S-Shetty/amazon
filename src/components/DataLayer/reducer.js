// All the states are declared in the initialState
export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};

// Performs the given action on the data and returns the result
const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "removeFromBasket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
