import React, { useState, useTransition } from "react";

function TransitionPractice() {
  const [input, setInput] = useState("");
  const [optional, setOptional] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function checking(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    startTransition(() => {
      let l: string[] = [];

      for (let i = 0; i < 2000; i++) {
        l.push(e.target.value);
      }
      setOptional(l);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={checking} />
      {isPending ? (
        <p>loading....</p>
      ) : (
        optional.map((options, index) => {
          return <p key={index}>{options}</p>;
        })
      )}
    </>
  );
}

export default TransitionPractice;
