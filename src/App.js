import React, {useState} from 'react';

const App = () => {
    const [exercises, setExercises] = useState([]);

    const handleAddExercise = () => {
        setExercises([
            ...exercises, {
                name: '',
                sets: ['']
            }
        ]);
    };

    const handleAddSet = (exerciseIndex) => {
        const updatedExercises = [...exercises];
        const inputElement = document.getElementById(`input-set-${exerciseIndex}`);
        const inputValue = parseInt(inputElement.value);

        if (inputValue >= 1 && inputValue <= 100) {
            updatedExercises[exerciseIndex]
                .sets
                .push('');
            setExercises(updatedExercises);
        } else {
            // 횟수 입력 범위를 벗어난 경우 처리 로직 추가
            alert('횟수는 1에서 100 사이의 값을 입력해주세요.');
        }
    };

    const handleRemoveSet = (exerciseIndex, setIndex) => {
        const updatedExercises = [...exercises];
        updatedExercises[exerciseIndex]
            .sets
            .splice(setIndex, 1);
        setExercises(updatedExercises);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4 px-8">
                <h1 className="text-3xl font-bold">work out - log</h1>
                <nav className="flex justify-center">
                    <span className="text-gray-400 hover:text-white px-4">
                        홈
                    </span>
                    <span className="text-gray-400 hover:text-white px-4">
                        운동기록
                    </span>
                </nav>
            </header>

            <main className="flex-grow container mx-auto p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <input
                        type="text"
                        className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                        placeholder="운동 이름"/>
                    <button
                        className="bg-blue-500 text-white rounded-lg px-8 py-4"
                        onClick={handleAddExercise}>
                        추가하기
                    </button>
                </div>

                {
                    exercises.map((exercise, exerciseIndex) => (
                        <div className="mb-8" key={exerciseIndex}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <button
                                    className="bg-blue-500 text-white rounded-lg px-8 py-4 w-fit"
                                    onClick={() => handleAddSet(exerciseIndex)}>
                                    세트 추가
                                </button>
                            </div>

                            {
                                exercise
                                    .sets
                                    .map((set, setIndex) => (
                                        <div className="grid grid-cols-3 gap-4 mb-4" key={setIndex}>
                                            <input
                                                type="number"
                                                id={`input-set-${exerciseIndex}`}
                                                className="rounded-lg border-gray-300 border p-4 focus:outline-none"
                                                placeholder="횟수 입력란"
                                                min={0}
                                                max={100}
                                                />
                                            <div className="bg-green-500 text-white rounded-lg px-8 py-4 text-center">{setIndex + 1}세트</div>
                                            <button
                                                className="bg-red-500 text-white rounded-lg px-8 py-4"
                                                onClick={() => handleRemoveSet(exerciseIndex, setIndex)}>
                                                삭제
                                            </button>
                                        </div>
                                    ))
                            }
                        </div>
                    ))
                }

                <button className="bg-blue-500 text-white rounded-lg px-8 py-4">완료</button>
            </main>

            <footer className="bg-gray-800 text-white py-4 px-8">
                <div className="flex justify-center">
                    <span>mad-by woong</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
