import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
      <h1>Oops!!! Lawre LagGayei</h1>
      <p>{error.statusText || error.message }</p>
      {
        error.status === 404 && <div>
            <h3>page Not found</h3>
            <p>go back to your main page</p>
            <Link to="/"><button>Go to Home</button></Link>
        </div>
      }
    </div>
  );
};

export default Error;
