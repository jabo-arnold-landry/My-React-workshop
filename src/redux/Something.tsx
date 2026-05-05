import { increment, incrementByAction } from "./slices/counterSlice";
import { useActionState } from "react";
import { addLocation } from "./slices/userSlice";
import { dispatchApp, useSelectorApp } from "./hooks/hook";

function Something() {
  const [data, action, isLoading] = useActionState(updateinfo, null);

  function updateinfo(data, formData: FormData) {
    console.log(data);
    const city = formData.get("city") as string;
    const district = formData.get("district") as string;
    dispatch(addLocation({ city, district }));
  }
  const dispatch = dispatchApp();
  const userData = useSelectorApp((state) => state.user)

  console.log("rendered");
  console.log(userData);
  return (
    <>
      <div>
        <p>names: {userData.names}</p>
        <p>emailadrees: {userData.email}</p>
        <form action={action}>
          <input type="text" placeholder="input your city" name="city" /> <br />
          <input
            type="text"
            placeholder="input your district"
            name="district"
          />{" "}
          <br />
          <button disabled={isLoading}>update</button>
        </form>
      </div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAction(4));
        }}
      >
        add 4
      </button>
    </>
  );
}

export default Something;
