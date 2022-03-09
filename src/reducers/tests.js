const testsReducerDefaultState = [];

const tests = (state = testsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return [
        ...state,
        action.test
      ];
    case 'REMOVE_TEST':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TEST':
      return state.map((test) => {
        if (test.id === action.id) {
          return {
            ...test,
            ...action.updates
          };
        } else {
          return test;
        };
      });
    case 'SET_TESTS':
      return action.test;
    default:
      return state;
  }
};
export default tests;