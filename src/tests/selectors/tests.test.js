import selectTests from '../../selectors/tests';
import tests from '../fixtures/tests';

test('Filter by text value', () => {
  const filters = {
    text: 'e'
  };
  const result = selectTests(tests, filters);
  expect(result).toEqual([tests[0], tests[2]]);
});
