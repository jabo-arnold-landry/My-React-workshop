import { useOptimistic, useState, useTransition } from "react";
const todos = ["hello", "john", "doe"];

function UseOptimisticPractice() {
  const [lists, setLists] = useState(todos);
  const [text, setText] = useState("");
  const [optimisticTodo, setOptimistic] = useOptimistic(lists);
  const [isLoading, startTransition] = useTransition();

  function addTodos(text: string) {
    setOptimistic((prev) => [...prev, `${text}-op`]);

    return new Promise<void>((reject) => {
      setTimeout(() => {
        reject();

        // setLists((prev) => [...prev, text]);
      }, 3000);
    });
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          disabled={isLoading}
        />
        <button
          onClick={() => {
            startTransition(async () => {
              try {
                await addTodos(text);
                // setText("");
              } catch {
                setText(text);
                setOptimistic(lists);
              }
            });
          }}
        >
          Add todo
        </button>
      </div>
      <main>
        {optimisticTodo.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </main>
    </>
  );
}

export default UseOptimisticPractice;
