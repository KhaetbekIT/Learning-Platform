import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section>
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Register;
