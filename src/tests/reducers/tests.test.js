import moment from 'moment';
import testsReducer from '../../reducers/tests';
import tests from '../fixtures/tests';

test('Set default state', () => {
  const state = testsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Remove test by id', () => {
  const action = {
    type: 'REMOVE_TEST',
    id: tests[1].id
  };
  const state = testsReducer(tests, action);
  expect(state).toEqual([tests[0], tests[2]]);
});

test('Cant remove tests if id not found', () => {
  const action = {
    type: 'REMOVE_TEST',
    id: '-1'
  };
  const state = testsReducer(tests, action);
  expect(state).toEqual(tests);
});

test('Add an test', () => {
  const test = {
    id: '123',
    testType: 'Liver Function',
    description: 'Liver',
    whiteCell: 1,
    redCell: 1,
    haemoglobin: 1,
    mvc: 1,
    mch: 1,
    mchc: 1,
    platelet: 1,
    neutrophil: 1,
    lymphocyte: 1,
    monocyte: 1,
    eosinophil: 1,
    basophil: 1,
    protein: 1,
    albumin: 1,
    bilirubin: 1,
    phosphatase: 1,
    alt: 1,
    createdAt: moment(0).add(4111, 'days').valueOf()
  };
  const action = {
    type: 'ADD_TEST',
    test
  };
  const state = testsReducer(tests, action);
  expect(state).toEqual([...tests, test]);
});

test('Edit an test', () => {
  const whiteCell = 2;
  const action = {
    type: 'EDIT_TEST',
    id: tests[1].id,
    updates: {
        whiteCell
    }
  };
  const state = testsReducer(tests, action);
  expect(state[1].whiteCell).toBe(whiteCell);
});

test('Cant edit an test if id not found', () => {
  const whiteCell = 2;
  const action = {
    type: 'EDIT_TEST',
    id: '-1',
    updates: {
        whiteCell
    }
  };
  const state = testsReducer(tests, action);
  expect(state).toEqual(tests);
});

test('Set tests', () => {
  const action = {
    type: 'SET_TESTS',
    tests: [tests[1]]
  };
  const state = testsReducer(tests, action);
  expect(state).toEqual([tests[1]]);
});
