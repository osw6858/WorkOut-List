const initialState = {
  exercises: [],
};

//action: addExercise함수가 반화한 객체 / state: 현재상태
const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, { ...action.payload, sets: [] }],
      };
    case 'DELETE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.filter((_, index) => index !== action.payload),
      };
    case 'ADD_SET':
      const { exerciseIndex, set } = action.payload;
      const updatedExercises = [...state.exercises];
      updatedExercises[exerciseIndex].sets.push(set);
      return {
        ...state,
        exercises: updatedExercises,
      };
    case 'DELETE_SET':
      const { exerciseIndex: delExerciseIndex, setIndex } = action.payload;
      const delUpdatedExercises = [...state.exercises];
      delUpdatedExercises[delExerciseIndex].sets.splice(setIndex, 1);
      return {
        ...state,
        exercises: delUpdatedExercises,
      };
    default:
      return state;
  }
};

export default exerciseReducer;
