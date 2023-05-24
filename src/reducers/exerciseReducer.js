const initialState = {
    exercises: [],
  };
  
  const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXERCISE':
        return {
          ...state,
          exercises: [...state.exercises, action.payload],
        };
      case 'DELETE_EXERCISE':
        return {
          ...state,
          exercises: state.exercises.filter((exercise, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default exerciseReducer;