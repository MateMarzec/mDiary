import database from '../firebase/firebase';

// ADD_TEST
export const addTest = (test) => ({
  type: 'ADD_TEST',
  test
});

export const startAddTest = (testData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = testData;
    const test = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/tests`).push(test).then((ref) => {
      dispatch(addTest({
        id: ref.key,
        ...test
      }));
    });
  };
};

// REMOVE_TEST
export const removeTest = ({ id } = {}) => ({
  type: 'REMOVE_TEST',
  id
});

export const startRemoveTest = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tests/${id}`).remove().then(() => {
      dispatch(removeTest({ id }));
    });
  };
};

// EDIT_TEST
export const editTest = (id, updates) => ({
  type: 'EDIT_TEST',
  id,
  updates
});

export const startEditTest = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tests/${id}`).update(updates).then(() => {
      dispatch(editTest(id, updates));
    });
  };
};

// SET_TESTS
export const setTests = (tests) => ({
  type: 'SET_TESTS',
  tests
});

export const startSetTests = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tests`).once('value').then((snapshot) => {
      const tests = [];

      snapshot.forEach((childSnapshot) => {
        tests.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTests(tests));
    });
  };
};
