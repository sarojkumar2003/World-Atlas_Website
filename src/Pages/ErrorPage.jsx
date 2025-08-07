import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();
    // console.error(error);

  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      {error &&  <p>{error.data}</p>}
      <NavLink to="/"><button>Go back to Home</button></NavLink>
    </div>
  )
}


