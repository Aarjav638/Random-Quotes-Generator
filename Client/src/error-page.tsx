import { useRouteError } from "react-router-dom";
import React from "react";
const ErrorPage: React.FC = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-[100vh] w-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as { status: string }).status}</i> <i> {(error as { statusText: string }).statusText}</i>
      </p>
    </div>
  );
}
export default ErrorPage;