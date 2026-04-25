import { Link, useRouteError } from "react-router-dom";

function RouterErrorBoundary() {
  const error: Error = useRouteError();
  return (
    <>
      <div>
        the id is not correct make sure the content have not been removed or
        deletetd
      </div>
      <p>reason: {error.message}</p>
      <Link to="/">Go back</Link>
    </>
  );
}

export default RouterErrorBoundary;
