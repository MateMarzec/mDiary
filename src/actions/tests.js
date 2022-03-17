import database from "../firebase/firebase";

// Add Test
export const addTest = (test) => ({
  type: "ADD_TEST",
  test,
});

export const startAddTest = (testData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      testType = "",
      description = "",
      whiteCell = 0,
      redCell = 0,
      haemoglobin = 0,
      mvc = 0,
      mch = 0,
      mchc = 0,
      platelet = 0,
      neutrophil = 0,
      lymphocyte = 0,
      monocyte = 0,
      eosinophil = 0,
      basophil = 0,
      protein = 0,
      albumin = 0,
      bilirubin = 0,
      phosphatase = 0,
      alt = 0,
      createdAt = 0,
    } = testData;
    const test = {
      testType,
      description,
      whiteCell,
      redCell,
      haemoglobin,
      mvc,
      mch,
      mchc,
      platelet,
      neutrophil,
      lymphocyte,
      monocyte,
      eosinophil,
      basophil,
      protein,
      albumin,
      bilirubin,
      phosphatase,
      alt,
      createdAt,
    };

    return database
      .ref(`users/${uid}/tests`)
      .push(test)
      .then((ref) => {
        dispatch(
          addTest({
            id: ref.key,
            ...test,
          })
        );
      });
  };
};

// Remove Test
export const removeTest = ({ id } = {}) => ({
  type: "REMOVE_TEST",
  id,
});

export const startRemoveTest = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/tests/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTest({ id }));
      });
  };
};

// Edit Test
export const editTest = (id, updates) => ({
  type: "EDIT_TEST",
  id,
  updates,
});

export const startEditTest = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/tests/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editTest(id, updates));
      });
  };
};

// Set Tests
export const setTests = (tests) => ({
  type: "SET_TESTS",
  tests,
});

export const startSetTests = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/tests`)
      .once("value")
      .then((snapshot) => {
        const tests = [];

        snapshot.forEach((childSnapshot) => {
          tests.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setTests(tests));
      });
  };
};
