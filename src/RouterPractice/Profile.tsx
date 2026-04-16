
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Personal Profile</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, esse.
        Illum explicabo numquam doloribus iure!
      </p>

      <Outlet/>
    </>
  );
}
