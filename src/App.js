import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from './actions/exerciseActions';

const App = () => {
  const exercises = useSelector(state => state.exercises);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddExercise = () => {
    const exercise = {
      name,
      duration: parseInt(duration),
    };
    dispatch(addExercise(exercise));
    setName('');
    setDuration('');
  };

  const handleDeleteExercise = (index) => {
    dispatch(deleteExercise(index));
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Workout Diary</h1>
      <div className="flex mb-5">
        <input
          className="border border-gray-300 rounded-md py-2 px-3 mr-2"
          placeholder="Exercise"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-md py-2 px-3 mr-2"
          placeholder="Duration (mins)"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddExercise}
          data-testid="add-exercise-button"
        >
          Add Exercise
        </button>
      </div>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index} className="mb-2" data-testid="exercise-item">
            <span>{exercise.name} - {exercise.duration} mins</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => handleDeleteExercise(index)}
              data-testid={`delete-exercise-button-${index}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
