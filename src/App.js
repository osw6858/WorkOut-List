import React, { useState, useRef } from 'react';

const App = () => {
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState('');
    const weightInputs = useRef([]);
    const repsInputs = useRef([]);

    const handleInputChange = (e) => {
        setNewExercise(e.target.value);
    };

    const handleAddExercise = () => {
        if (newExercise.trim() !== '') {
            setExercises([
                ...exercises, {
                    name: newExercise,
                    sets: [
                        {
                            weight: '',
                            repetitions: ''
                        }
                    ]
                }
            ]);
            setNewExercise('');
        }
    };

    const handleAddSet = (exerciseIndex) => {
        const weightInput = weightInputs.current[exerciseIndex];
        const repsInput = repsInputs.current[exerciseIndex];

        if (weightInput.value !== '' && repsInput.value !== '') {
            const updatedExercises = [...exercises];
            updatedExercises[exerciseIndex]
                .sets
                .push({weight: weightInput.value, repetitions: repsInput.value});
            setExercises(updatedExercises);
            weightInput.value = '';
            repsInput.value = '';
        } else {
            alert('무게와 횟수를 입력해주세요.');
        }
    };

    const handleRemoveSet = (exerciseIndex, setIndex) => {
        const updatedExercises = [...exercises];
        updatedExercises[exerciseIndex]
            .sets
            .splice(setIndex, 1);
        if (updatedExercises[exerciseIndex].sets.length === 1) {
            updatedExercises.splice(exerciseIndex, 1);
        }
        setExercises(updatedExercises);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4 px-8">
                <h1 className="text-3xl font-bold">Workout Log</h1>
                <nav className="flex justify-center">
                    <span className="text-gray-400 hover:text-white px-4">Home</span>
                    <span className="text-gray-400 hover:text-white px-4">Exercise Log</span>
                </nav>
            </header>

            <main className="flex-grow container mx-auto p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <input
                        type="text"
                        className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                        placeholder="Exercise Name"
                        value={newExercise}
                        onChange={handleInputChange}/>
                    <button
                        className="bg-blue-500 text-white rounded-lg px-8 py-4"
                        onClick={handleAddExercise}>
                        Add Exercise
                    </button>
                </div>

                {
                    exercises.map((exercise, exerciseIndex) => (
                        <div className="mb-8" key={exerciseIndex}>
                            <h2 className="text-xl font-bold mb-4">{exercise.name}</h2>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <input
                                    type="number"
                                    className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                                    placeholder="Weight"
                                    min={0}
                                    max={1000}
                                    ref={(el) => weightInputs.current[exerciseIndex] = el}/>
                                <input
                                    type="number"
                                    className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                                    placeholder="Repetitions"
                                    min={0}
                                    max={100}
                                    ref={(el) => repsInputs.current[exerciseIndex] = el}/>
                                <button
                                    className="bg-blue-500 text-white rounded-lg px-8 py-4"
                                    onClick={() => handleAddSet(exerciseIndex)}>
                                    Add Set
                                </button>
                            </div>

                            {
                                exercise
                                    .sets
                                    .map((set, setIndex) => (
                                        <div className="grid grid-cols-4 gap-4 mb-4" key={setIndex}>
                                            {
                                                set.weight !== '' && (
                                                    <div className="bg-gray-300 rounded-lg px-8 py-4 text-center">
                                                        {`${setIndex}세트`}
                                                    </div>
                                                )
                                            }
                                            {
                                                set.weight !== '' && (
                                                    <div className="bg-gray-300 rounded-lg px-8 py-4 text-center">
                                                        {`${set.weight}kg`}
                                                    </div>
                                                )
                                            }
                                            {
                                                set.repetitions !== '' && (
                                                    <div className="bg-gray-300 rounded-lg px-8 py-4 text-center">
                                                        {`${set.repetitions}회`}
                                                    </div>
                                                )
                                            }

                                            {
                                                set.repetitions !== '' && (
                                                    <button
                                                        className="bg-red-500 text-white rounded-lg px-8 py-4"
                                                        onClick={() => handleRemoveSet(exerciseIndex, setIndex)}>
                                                        Remove
                                                    </button>
                                                )
                                            }

                                        </div>
                                    ))
                            }
                        </div>
                    ))
                }

                <button className="bg-blue-500 text-white rounded-lg px-8 py-4">Complete</button>
            </main>

            <footer className="bg-gray-800 text-white py-4 px-8">
                <div className="flex justify-center">
                    <span>Made by Woong</span>
                </div>
            </footer>
        </div>
    );
};

export default App;