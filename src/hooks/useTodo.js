import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, deleteTodo } from "@server/actions";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const create = useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData(["todos"], (old = []) => [...old, newTodo]);
    },
  });

  const remove = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["todos"], (old = []) =>
        old.filter((todo) => todo.id !== deletedId)
      );
    },
  });

  return {
    todos: data,
    error,
    create,
    remove,
  };
};
