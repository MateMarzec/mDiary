import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddTest,
  addTest,
  editTest,
  startEditTest,
  removeTest,
  startRemoveTest,
  setTests,
  startSetTests
} from '../../actions/tests';
import tests from '../fixtures/tests';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const testsData = {};
  tests.forEach(({ id, testType, description, whiteCell, redCell, haemoglobin, mvc, mch, mchc, platelet, neutrophil, lymphocyte, monocyte, eosinophil, basophil, protein, albumin, bilirubin, phosphatase, alt, createdAt }) => {
    testsData[id] = { testType, description, whiteCell, redCell, haemoglobin, mvc, mch, mchc, platelet, neutrophil, lymphocyte, monocyte, eosinophil, basophil, protein, albumin, bilirubin, phosphatase, alt, createdAt };
  });
  database.ref(`users/${uid}/tests`).set(testsData).then(() => done());
});

test('Setup remove test action object', () => {
  const action = removeTest({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_TEST',
    id: '123abc'
  });
});

test('Remove test from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = tests[2].id;
  store.dispatch(startRemoveTest({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_TEST',
      id
    });
    return database.ref(`users/${uid}/tests/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('Setup edit test action object', () => {
  const action = editTest('123abc', { description: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_TEST',
    id: '123abc',
    updates: {
        description: 'New note value'
    }
  });
});

test('Edit test from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = tests[0].id;
  const updates = { amount: 21045 };
  store.dispatch(startEditTest(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_TEST',
      id,
      updates
    });
    return database.ref(`users/${uid}/tests/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});

test('Setup add test action object with provided values', () => {
  const action = addTest(tests[2]);
  expect(action).toEqual({
    type: 'ADD_TEST',
    test: tests[2]
  });
});

test('Add test to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const testData = {
    testType: 'Liver Function Test',
    description: 'Liver',
    whiteCell: 0,
    redCell: 0,
    haemoglobin: 0,
    mvc: 0,
    mch: 0,
    mchc: 0,
    platelet: 0,
    neutrophil: 0,
    lymphocyte: 0,
    monocyte: 0,
    eosinophil: 0,
    basophil: 0,
    protein: 0,
    albumin: 0,
    bilirubin: 0,
    phosphatase: 0,
    alt: 0,
    createdAt: 0
  };

  store.dispatch(startAddTest(testData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_TEST',
      test: {
        id: expect.any(String),
        ...testData
      }
    });

    return database.ref(`users/${uid}/tests/${actions[0].test.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(testData);
    done();
  });
});

test('Add test with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const testDefaults = {
        testType: '',
        description: '',
        whiteCell: 0,
        redCell: 0,
        haemoglobin: 0,
        mvc: 0,
        mch: 0,
        mchc: 0,
        platelet: 0,
        neutrophil: 0,
        lymphocyte: 0,
        monocyte: 0,
        eosinophil: 0,
        basophil: 0,
        protein: 0,
        albumin: 0,
        bilirubin: 0,
        phosphatase: 0,
        alt: 0,
        createdAt: 0
  };

  store.dispatch(startAddTest({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_TEST',
      test: {
        id: expect.any(String),
        ...testDefaults
      }
    });

    return database.ref(`users/${uid}/tests/${actions[0].test.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(testDefaults);
    done();
  });
});

test('Setup set test action object with data', () => {
  const action = setTests(tests);
  expect(action).toEqual({
    type: 'SET_TESTS',
    tests
  });
});

test('Fetch the tests from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetTests()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_TESTS',
      tests
    });
    done();
  });
});
