const SetItem = ({ set, exerciseIndex, setIndex, handleRemoveSet }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-2 md:mb-4 text-sm" key={setIndex}>
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
                    Remove Set
                </button>
            )
        }
        <span className="opacity-0 text-center text-red-600 text-xs">견뎌</span>
    </div>
    );
  };

  export default SetItem;