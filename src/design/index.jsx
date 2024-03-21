import { Fragment } from "react";
import { Helmet } from "react-helmet";

const Design = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Design</title>
      </Helmet>
      <section>
        <div className="container mx-auto">testing container</div>
      </section>
    </Fragment>
  );
};

export default Design;
