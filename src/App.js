import React, {useState, useRef} from 'react';
import AddExercise from './components/AddExercise';
import Header from './components/Header';
import CarouselComponent from './components/CarouselComponent';
import ExerciseItem from './components/ExerciseItem';
import Footer from './components/Footer'
import TodayInform from './components/TodayInform';
import Intro from './components/Intro';
import {Collapse} from 'antd';
const {Panel} = Collapse;

const App = () => {
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState('');
    const weightInputs = useRef([]);
    const repsInputs = useRef([]);

    /**운동을 추가하는 함수.  */
    const handleAddExercise = () => {
        if (newExercise.trim() !== '') {
            setExercises([
                {
                    name: newExercise,
                    sets: [
                        {
                            weight: '',
                            repetitions: ''
                        }
                    ]
                },
                ...exercises
            ]);
            setNewExercise('');
        } else {
            alert('Please enter your workout.')
        }
    };

    /**세트를 추가하는 함수. exercises배열 index를 매개변수로 받음  */
    const handleAddSet = (exerciseIndex) => {
        const weightInput = weightInputs.current[exerciseIndex];
        const repsInput = repsInputs.current[exerciseIndex];

        if (parseInt(weightInput.value) > 800 || parseInt(repsInput.value) > 300) {
            alert('잘못 입력된게 아닌지 확인해 주세요!');
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
            alert('무게와 반복횟수를 입력해 주세요.');
        }
    };

    /**입력한 운동을 제거하는 함수. 운동(exercises)배열 index를 매개변수로 받음 */
    const handleRemoveExercise = (exerciseIndex) => {
        const updatedExercises = [...exercises];
        updatedExercises.splice(exerciseIndex, 1);
        setExercises(updatedExercises);
    }

    /**세트를 제거하는 함수. 제거할 운동(exercises)배열 index와 세트(sets) index를 매개변수로 받음   */
    const handleRemoveSet = (exerciseIndex, setIndex) => {
        const updatedExercises = [...exercises];
        updatedExercises[exerciseIndex]
            .sets
            .splice(setIndex, 1);
        setExercises(updatedExercises);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-200 ">
            <Header/>
            <Collapse className='text-lg font-bold ' defaultActiveKey={['1']}>
                <Panel  header="이용방법" key="2">
                <Intro></Intro>
                </Panel>
            </Collapse>
            <TodayInform/>

            <main className="flex-grow container mx-auto px-8 py-5 ">
                <AddExercise
                    setNewExercise={setNewExercise}
                    newExercise={newExercise}
                    handleAddExercise={handleAddExercise}/> {
                    exercises.map((exercise, exerciseIndex) => (
                        <ExerciseItem
                            key={exerciseIndex}
                            exercise={exercise}
                            exerciseIndex={exerciseIndex}
                            weightInputs={weightInputs}
                            repsInputs={repsInputs}
                            handleAddSet={handleAddSet}
                            handleRemoveSet={handleRemoveSet}
                            handleRemoveExercise={handleRemoveExercise}/>
                    ))
                }

                <button
                    className="bg-blue-500 text-white rounded-lg px-8 py-4 font-bold  hover:bg-sky-500">기록 저장</button>
            </main>
            <CarouselComponent/>
            <Footer/>
        </div>
    );
};

export default App;