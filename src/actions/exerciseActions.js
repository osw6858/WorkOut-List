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

export const addSet = (exerciseIndex, set) => {
  return {
    type: 'ADD_SET',
    payload: { exerciseIndex, set },
  };
};

export const deleteSet = (exerciseIndex, setIndex) => {
  return {
    type: 'DELETE_SET',
    payload: { exerciseIndex, setIndex },
  };
};
