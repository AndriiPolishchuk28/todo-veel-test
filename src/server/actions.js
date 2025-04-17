import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const { data } = await axios.get(`${BASE_URL}?_limit=10`);
  return data;
};

export const createTodo = async (newTodo) => {
  const response = await axios.post(BASE_URL, newTodo);
  return {
    ...response.data,
    id: nanoid(),
  };
};

export const deleteTodo = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
};
