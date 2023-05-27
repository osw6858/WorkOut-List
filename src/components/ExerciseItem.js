import {Collapse} from 'antd';
import SetItem from './SetItem';
const {Panel} = Collapse;

const ExerciseItem = ({
    exercise,
    exerciseIndex,
    weightInputs,
    repsInputs,
    handleAddSet,
    handleRemoveSet,
    handleRemoveExercise
  }) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddSet(exerciseIndex);
        }
      };

    return (
      <Collapse defaultActiveKey={['1']}>
        <Panel className="text-xl font-bold mb-4" header={exercise.name} key="1">
          {/* 무게와 반복 횟수 입력 */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
            <input
              type="number"
              className="rounded-lg border-gray-300 border p-4 focus:outline-none"
              placeholder="무게"
              min={0}
              max={1000}
              onKeyDown ={handleKeyPress}
              ref={(el) => (weightInputs.current[exerciseIndex] = el)}
            />
            <input
              type="number"
              className="rounded-lg border-gray-300 border p-4 focus:outline-none"
              placeholder="반복 횟수"
              min={0}
              max={100}
              onKeyDown ={handleKeyPress}
              ref={(el) => (repsInputs.current[exerciseIndex] = el)}
            />
            <button
              className="bg-blue-500 text-white rounded-lg px-8 py-4 hover:bg-sky-500"
              onClick={() => handleAddSet(exerciseIndex)}
            >
              Add Set
            </button>
          </div>
  
          {/* 세트들 */}
          {exercise.sets.map((set, setIndex) => (
            <SetItem
              key={setIndex}
              set={set}
              exerciseIndex={exerciseIndex}
              setIndex={setIndex}
              handleRemoveSet={handleRemoveSet}
            />
          ))}
           <button
                    className="bg-red-500 hover:bg-red-400 text-white rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1"
                    onClick={() => handleRemoveExercise(exerciseIndex)}>
                    Remove Exercise
                </button>
        </Panel>
      </Collapse>
    );
  };

  export default ExerciseItem;