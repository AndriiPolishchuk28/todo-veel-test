'use client';

export const TodoList = ({ todos, onDelete }) => (
  <ul className="space-y-2">
    {todos?.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center p-3 bg-white rounded shadow"
      >
        <span>{todo.title}</span>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
