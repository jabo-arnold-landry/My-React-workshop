import { use } from "react";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

export default function UseHookPractice() {
  const data = use(usersPromise);
  console.log(data);
  return (
    <div>
      <h2>Users</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
