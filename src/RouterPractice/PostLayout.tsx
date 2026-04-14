import { Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <h1>Postings Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
        recusandae.
      </p>

      <Outlet />
    </>
  );
}

export default PostLayout;
