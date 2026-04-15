import { Outlet, Navigate } from "react-router-dom";

function PostLayout() {
  const user = true;
  return (
    <>
      <h1>Postings Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
        recusandae.
      </p>

      {user ? (
        <Outlet />
      ) : (
        <Navigate to="/" replace={true} state={{ from: location.pathname }} />
      )}
    </>
  );
}

export default PostLayout;
