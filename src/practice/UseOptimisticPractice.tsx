import { useActionState, useOptimistic, useState, useTransition } from "react";
const todos = ["hello", "john", "doe"];

function UseOptimisticPractice() {
  const [lists, setLists] = useState(todos);
  const [text, setText] = useState("");
  const [optimisticTodo, setOptimistic] = useOptimistic(lists);
  const [isLoading, startTransition] = useTransition();
  const [data, action, isPending] = useActionState(addTodos, undefined);

  function addTodos(data, formData: FormData) {
    console.log(data);
    const text = formData.get("todo") as string;
    setOptimistic((prev) => [...prev, `${text}`]);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLists((prev) => [...prev, text]);
        resolve();
      }, 3000);
    })
  }

  return (
    <>
      <form action={action}>
        <input type="text" name="todo" disabled={isPending} />
        <button>Add todo</button>
      </form>
      <main>
        {optimisticTodo.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </main>
    </>
  );
}

export default UseOptimisticPractice;
