import { type FormEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";

function FormStatePractices() {
  const [todos, setTodos] = useState<Record<string, string>[]>([]);

  async function onSubmit(data: FormEvent) {
    const names = data.get("names");
    const newNames = await createNames(names);
    setTodos((prev) => [...prev, newNames]);
  }

  function createNames(name: string) {
    return wait({ name }, 1000);
  }

  function wait<T>(value: T, duration: number) {
    return new Promise<T>((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, duration);
    });
  }

  return (
    <>
      <Form action={onSubmit} method="post">
        <Input type="text" name="names" />
        <SubmitBtn />
      </Form>
      {todos.map((todo, index) => {
        const { name } = todo;
        return <h4 key={index}>{name}</h4>;
      })}
    </>
  );
}

function SubmitBtn() {
  const data = useFormStatus();
  let isLoading = data.pending;
  return (
    <Button disabled={isLoading}>{isLoading ? "loading...." : "submit"}</Button>
  );
}

export default FormStatePractices;
