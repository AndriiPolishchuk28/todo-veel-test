'use client';

import { useTodos } from "@hooks/useTodo";

import { TodoList } from "@components/TodoList/TodoList";
import { TodoForm } from "@components/TodoForm/TodoForm";

export default function HomePage() {
  const { todos, error, create, remove } = useTodos();

  if (error) return <p className="text-center text-red-500">{error.message}</p>;

  const handleAdd = (title) => {
    create.mutate({ title, userId: 1, completed: false });
  };

  const handleDelete = (id) => {
    remove.mutate(id);
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-5">Todo App</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
      <TodoForm onSubmit={handleAdd} isPending={create.isPending} />
    </main>
  );
}
