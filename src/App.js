import React, {useState, useRef} from 'react';
import {Carousel} from 'antd';

const App = () => {
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState('');
    const weightInputs = useRef([]);
    const repsInputs = useRef([]);

    const handleInputChange = (e) => {
        setNewExercise(e.target.value);
    };

    /**운동을 추가하는 함수.  */
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
        } else {
            alert('운동을 입력해 주세요.')
        }
    };

    /**세트를 추가하는 함수. exercises배열 index를 매개변수로 받음  */
    const handleAddSet = (exerciseIndex) => {
        const weightInput = weightInputs.current[exerciseIndex];
        const repsInput = repsInputs.current[exerciseIndex];

        if (parseInt(weightInput.value) > 800 || parseInt(repsInput.value) > 300) {
            alert('잘못 입력한게 아닌지 확인해 주세요!');
        }

        if (weightInput.value !== '' && repsInput.value !== '') {
            const updatedExercises = [...exercises];

            updatedExercises[exerciseIndex]
                .sets
                .push({weight: weightInput.value, repetitions: repsInput.value});
            setExercises(updatedExercises);
            weightInput.value = '';
            repsInput.value = '';
        } else {
            alert('올바른 무게와 횟수를 입력해주세요.');
        }
    };

    /**세트를 제거하는 함수. 제거할 운동(exercises) index와 세트(sets) index를 매개변수로 받음   */
    const handleRemoveSet = (exerciseIndex, setIndex) => {
        const updatedExercises = [...exercises];
        console.log(updatedExercises)
        updatedExercises[exerciseIndex]
            .sets
            .splice(setIndex, 1);
        if (updatedExercises[exerciseIndex].sets.length === 1) {
            updatedExercises.splice(exerciseIndex, 1);
        }
        setExercises(updatedExercises);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-200">
            <header className="bg-gray-800 text-white py-4 px-8">
                <h1 className="text-3xl py-2 font-bold">WorkOut__Log</h1>
                <nav className="flex justify-center">
                    <span className="text-gray-400 hover:text-white px-4 cursor-pointer">Home</span>
                    <span className="text-gray-400 hover:text-white px-4 cursor-pointer">View Logs</span>
                    <span className="text-gray-400 hover:text-white px-4 cursor-pointer">About</span>
                </nav>
            </header>
            <div className='w-4/6 p-8 mx-auto hidden sm:block'>
                <Carousel >
                    {/* PC 화면에서는 보임 */}
                    <div>
                        <h3
                            className='bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-400 flex flex-col justify-center items-center px-6'>Take Your Workout to the Next Level with Our App
                            <span className='text-base font-normal mt-2'>Track your progress and stay motivated</span>
                        </h3>
                    </div>
                    <div>
                        <h3
                            className='bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-400 flex flex-col justify-center items-center px-6'>Get in Shape and Stay Accountable
                            <span className='text-base font-normal mt-2'>Set your goals and track your results with ease</span>
                        </h3>
                    </div>
                    <div>
                        <h3
                            className='bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-400 flex flex-col justify-center items-center px-6'>Join a Community of Fitness Enthusiasts
                            <span className='text-base font-normal mt-2'>Join challenges, share your workouts, and get inspired</span>
                        </h3>
                    </div>
                    <div>
                        <h3
                            className='bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-400 flex flex-col justify-center items-center px-6'>Thank you for Visite Our Page
                            <span className='text-base font-normal mt-2'>Make every day count with our Page</span>
                        </h3>
                    </div>
                </Carousel>
            </div>

            <main className="flex-grow container mx-auto p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <input
                        type="text"
                        className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                        placeholder="Exercise Name"
                        value={newExercise}
                        onChange={handleInputChange}/>
                    <button
                        className="bg-blue-500 text-white rounded-lg px-8 py-4 hover:bg-sky-500"
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
                                    className="bg-blue-500 text-white rounded-lg px-8 py-4 hover:bg-sky-500"
                                    onClick={() => handleAddSet(exerciseIndex)}>
                                    Add Set
                                </button>
                            </div>

                            {
                                exercise
                                    .sets
                                    .map((set, setIndex) => (
                                        <div className="grid grid-cols-4 gap-4 mb-2 md:mb-4" key={setIndex}>
                                            {
                                                set.weight !== '' && (
                                                    <div
                                                        className="bg-gray-300 rounded-lg px-2 md:px-8 py-2 md:py-4 text-center font-sans col-span-2 md:col-span-1">
                                                        {`${setIndex} Set`}
                                                    </div>
                                                )
                                            }
                                            {
                                                set.weight !== '' && (
                                                    <div
                                                        className="bg-gray-300 rounded-lg px-2 md:px-8 py-2 md:py-4 text-center font-sans col-span-2 md:col-span-1">
                                                        {`${set.weight}kg`}
                                                    </div>
                                                )
                                            }
                                            {
                                                set.repetitions !== '' && (
                                                    <div
                                                        className="bg-gray-300 rounded-lg px-2 md:px-8 py-2 md:py-4 text-center font-sans col-span-2 md:col-span-1">
                                                        {`${set.repetitions} Reps`}
                                                    </div>
                                                )
                                            }

                                            {
                                                set.repetitions !== '' && (
                                                    <button
                                                        className="bg-red-500 hover:bg-red-400 text-white rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1"
                                                        onClick={() => handleRemoveSet(exerciseIndex, setIndex)}>
                                                        Remove
                                                    </button>
                                                )
                                            }
                                            <span className="opacity-0 text-center text-red-600 text-xs">견뎌</span>
                                        </div>

                                    ))
                            }

                        </div>
                    ))
                }

                <button
                    className="bg-blue-500 text-white rounded-lg px-8 py-4  hover:bg-sky-500">Complete</button>
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