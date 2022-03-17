const filtersReducerDefaultState = {
  text: "",
};
// Filters Component
const filters = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};
export default filters;
