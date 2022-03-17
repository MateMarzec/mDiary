// Tests Selector
const testSelector = (tests, { text }) => {
  return tests.filter((test) => {
    const textMatch = test.description
      .toLowerCase()
      .includes(text.toLowerCase());
    return textMatch;
  });
};
export default testSelector;
