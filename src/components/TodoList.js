import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); //index와 불일치 하는것만 업데이트 즉, index와 일치하는 목록 제거
    setTodos(updatedTodos);
  };

  return (
    <div>
       <div  className="bg-blue-500 text-white p-4">
      Hello, Tailwind CSS!
    </div>
      <h1>Todo List</h1>
      <input className="border m-1" type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul >
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="border m-6" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;