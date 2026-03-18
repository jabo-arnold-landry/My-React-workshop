import { useState, useEffect } from "react";
import { type TodoList } from "../types";
import fetchingData from "../API/gettingTestingData";

function Todos() {
  const [todos, setTodos] = useState<TodoList[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const todos = async () => {
      const todoList: TodoList[] = await fetchingData(
        "http://localhost:3000/dummy/userTodos",
        controller
      );

      setTodos((prev) => [...prev, ...todoList]);
    };

    todos();

    return () => {
      console.log("cleanup function just runned");
      controller.abort();
    };
  }, []);

  return (
    <>
      {todos.map((todo, index) => {
        const { task } = todo;
        return <p key={index}>{task}</p>;
      })}
    </>
  );
}

export default Todos;
