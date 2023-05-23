import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders the list of todos correctly', () => {
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: true },
      { id: 3, text: 'Deploy app', completed: false },
    ];

    render(<TodoList todos={todos} />);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);

    expect(todoItems[0]).toHaveTextContent('Learn React');
    expect(todoItems[1]).toHaveTextContent('Write tests');
    expect(todoItems[2]).toHaveTextContent('Deploy app');
  });

  test('allows adding a new todo', () => {
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: true },
    ];

    render(<TodoList todos={todos} />);

    const addTodoInput = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(addTodoInput, { target: { value: 'Deploy app' } });
    fireEvent.click(addButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
    expect(todoItems[2]).toHaveTextContent('Deploy app');
  });

  test('allows toggling the completion status of a todo', () => {
    const todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: true },
    ];

    render(<TodoList todos={todos} />);

    const toggleButtons = screen.getAllByTestId('toggle-button');

    fireEvent.click(toggleButtons[0]);
    expect(toggleButtons[0]).toHaveTextContent('Completed');

    fireEvent.click(toggleButtons[1]);
    expect(toggleButtons[1]).toHaveTextContent('Not Completed');
  });
});