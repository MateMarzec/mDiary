export default (tests) => {
    return tests
        .map((test) => test.amount)
        .reduce((sum, value) => sum + value, 0);
  };