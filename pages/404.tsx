import type { NextPage } from "next";
import Main from "../components/Main";

const ErrorPage: NextPage = () => {
  return (
    <Main title={"404"}>
      <h1>404: Oops! We can’t find that page.</h1>
    </Main>
  );
};

export default ErrorPage;
