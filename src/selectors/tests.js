import moment from 'moment';

const tests = (tests, { text, sortBy, startDate, endDate }) => {
  return tests.filter((test) => {
    const createdAtMoment = moment(test.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = test.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  })
};
export default tests;