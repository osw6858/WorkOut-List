export const addExercise = (exercise) => {
    return {
      type: 'ADD_EXERCISE',
      payload: exercise,
    };
  };
  
  export const deleteExercise = (index) => {
    return {
      type: 'DELETE_EXERCISE',
      payload: index,
    };
  };