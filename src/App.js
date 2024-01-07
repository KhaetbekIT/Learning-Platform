import { Fragment } from "react";
import "@styles/base.scss";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Platform</title>
      </Helmet>
      <span>@todo</span>
    </Fragment>
  );
}

export default App;
