// Tags Reducer

const tagsReducerDefaultState = [];

export default (state = tagsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TAG':
      return [
        ...state,
        action.name
      ];
    case 'REMOVE_TAG':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TAG':
      return state.map((tag) => {
        if(tag.id === action.id) {
          return {
            id: action.id,
            name: action.name
          }
        } else {
          return tag;
        }
      });
    case 'SET_TAGS':
      return action.tags;
    default:
      return state;
  }
};
