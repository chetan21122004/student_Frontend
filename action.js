// actions.js
export const updateCurrentPath = (path) => ({
    type: 'UPDATE_CURRENT_PATH',
    payload: path,
  });
  
  // reducer.js
  const initialState = {
    currentPath: '/',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CURRENT_PATH':
        return {
          ...state,
          currentPath: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  