import { Fragment } from "react";
import "@styles/base.scss";
import { Helmet } from "react-helmet";
import MapRouter from "./router";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Platform</title>
      </Helmet>
      <MapRouter />
    </Fragment>
  );
}

export default App;
