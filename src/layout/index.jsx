import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Platform</title>
      </Helmet>
      <header>Header</header>

      <main className={`main`}>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </Fragment>
  );
};

export default Layout;
