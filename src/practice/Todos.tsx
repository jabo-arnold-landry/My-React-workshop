import { useState, useEffect, useTransition } from "react";
import { type TodoList } from "../types";
import fetchingData from "../API/gettingTestingData";

function Todos() {
  const [todos, setTodos] = useState<TodoList[]>([]);
  const [pending, startTransition] = useTransition();
  const [weHaveErr, setWeHaveErr] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const todos = async () => {
      try {
        const todoList: TodoList[] = await fetchingData(
          "http://localhost:3000/dummy/userTodos",
          controller,
        );
        startTransition(() => {
          setTodos((prev) => [...prev, ...todoList]);
        });
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setWeHaveErr(true);
        }
      }
    };

    todos();

    return () => {
      console.log("cleanup function just runned");
      controller.abort();
    };
  }, []);
  if (weHaveErr) throw new Error("failed to get resources");
  return (
    <>
      <p>{pending && "loading..."}</p>
      {todos.map((todo, index) => {
        const { task } = todo;
        return <p key={index}>{task}</p>;
      })}
    </>
  );
}

export default Todos;
