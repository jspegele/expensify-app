import database from '../firebase/firebase';

// ADD_TAG
export const addTag = (name) => ({
  type: 'ADD_TAG',
  name
});

export const startAddTag = (name = '') => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tags`).push(name).then((ref) => {
      dispatch(addTag({
        id: ref.key,
        name
      }));
    });
  };
};

// REMOVE_TAG
export const removeTag = ({ id } = {}) => ({
  type: 'REMOVE_TAG',
  id
});

export const startRemoveTag = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tags/${id}`).remove().then(() => {
      dispatch(removeTag({ id }));
    });
  };
};

// EDIT_TAG
export const editTag = (id, name) => ({
  type: 'EDIT_TAG',
  id,
  name
});

export const startEditTag = (id, name) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tags/${id}`).set(name).then(() => {
      dispatch(editTag(id, name));
    });
  };
};

// SET_TAGS
export const setTags = (tags) => ({
  type: 'SET_TAGS',
  tags
});

export const startSetTags = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tags`).once('value').then((snapshot) => {
      const tags = [];
      snapshot.forEach((childSnapshot) => {
        tags.push({
          id: childSnapshot.key,
          name: childSnapshot.val() 
        });
      });
      dispatch(setTags(tags));
    }).catch((e) => {
      console.log('Error fetching data', e);
    });
  };
};
