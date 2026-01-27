import { Outlet } from "react-router";

const FrontendLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default FrontendLayout;
