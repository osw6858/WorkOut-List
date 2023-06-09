
const AddExercise = ({setNewExercise,newExercise,handleAddExercise}) => {

    const handleInputChange = (e) => {
        setNewExercise(e.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddExercise();
        }
      };

    return ( <div className="grid grid-cols-2 gap-4 mb-8 font-bold">
    <input
        type="text"
        className="rounded-lg border-gray-300 border p-4 focus:outline-none"
        placeholder="운동종목"
        value={newExercise}
        onChange={handleInputChange}
        onKeyDown ={handleKeyPress}
        />
        
    <button
        className="bg-blue-500 text-white rounded-lg px-8 py-4 hover:bg-sky-500"
        onClick={handleAddExercise}
        >
        추가
    </button>
</div>)
}

export default AddExercise;