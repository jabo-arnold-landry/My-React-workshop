import { useActionState } from "react";

function ActionStatePractice() {
  const [data, action, isPending] = useActionState(onSubmit, undefined);

  async function onSubmit(previousState: unknown, formData: FormData) {
    const names = formData.get("names") as string;
    const newNames = await createNames(names);
    console.log(previousState);
    return [newNames];
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
      <form action={action} method="post">
        <input type="text" name="names" />
        <button disabled={isPending}>
          {isPending ? "sending..." : "submit"}
        </button>
      </form>
      
      {data?.map((element, index) => {
        return <p key={index}>{element.name}</p>;
      })}
    </>
  );
}

export default ActionStatePractice;
