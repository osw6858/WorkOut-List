
const AddExercise = ({setNewExercise,newExercise,handleAddExercise}) => {

    const handleInputChange = (e) => {
        setNewExercise(e.target.value);
    };

    return ( <div className="grid grid-cols-2 gap-4 mb-8 font-bold">
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
</div>)
}

export default AddExercise;