import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

function PostLayout() {
  const [counter, setCounter] = useState(0);
  const user = true;
  const location = useLocation();
  return (
    <>
      <h1>Postings Page</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
        recusandae.
      </p>

      {user ? (
        <Outlet context={{ counter }} />
      ) : (
        <Navigate to="/" replace={true} state={{ from: location.pathname }} />
      )}
    </>
  );
}

export default PostLayout;
