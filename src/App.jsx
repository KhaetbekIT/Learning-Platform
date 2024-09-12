import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Shared from "./shared";
import Logo from "./assets/other/logo.png"

const App = () => {
  return (
    <>
      <Helmet>
        <title>Platform - App</title>
      </Helmet>

      <main className="flex">
        <Shared.Components.Menu
        initial={"/Platform/student/dashboard"}
          list={[
            {
              icon: <Shared.Components.Icons name="course" />,
              key: '1',
              label: 'Course',
              link: '/Platform/student/course'
            },
            {
              icon: <Shared.Components.Icons name="prototype" />,
              key: '2',
              label: 'Prototype',
              link: '/Platform/student/prototype'
            },
            {
              icon: <Shared.Components.Icons name="discussion" />,
              key: '3',
              label: 'Discussion',
              link: '/Platform/student/discussion'
            },
            {
              icon: <Shared.Components.Icons name="live" />,
              key: '4',
              label: 'Live',
              link: '/Platform/student/live'
            }
          ]}
          logo={Logo}
          open
          username="Mohammad Shams Tabrez"
          job={"UI/UX Developer"}
        />

        <article className="flex-grow p-5">
          <Outlet />
        </article>

      </main>
    </>
  );
};

export default App;
