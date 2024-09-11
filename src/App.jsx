import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Shared from "./shared";
import Logo from "./assets/other/logo.png"
import { Badge } from "antd";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Platform - App</title>
      </Helmet>

      <main className="flex">
        <Shared.Components.Menu username={"Username"} job={"Developer"} open logo={Logo} />

        <article className="flex-grow p-5">
          <header className="flex items-center justify-end gap-5">
            <Shared.Components.Search data={[{ label: "ok" }]} />

            <Badge count={3}>
              <Shared.Components.Icons className={"text-black"} name={"bell"} />
            </Badge>

            <Shared.Components.Icons className={"text-black"} name={"settings"} />
          </header>

          <Outlet />
        </article>

      </main>
    </>
  );
};

export default App;
