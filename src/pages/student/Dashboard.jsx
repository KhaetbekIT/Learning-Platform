import { Helmet } from "react-helmet";
import Shared from "../../shared";
import { Calendar } from "antd";
import { Link } from "react-router-dom";
import { EnrolledCourses } from "../../db/index.jsx";

export const Dashboard = () => {
  const enrolledCoursesItem = EnrolledCourses.map((item, index) => (
    <Link
      to={`/Platform/student/my-courses/catalog?catalogId=${item.id}`}
      key={index}
      className={"block"}
    >
      <Shared.Components.CardCourseImage
        className={"w-full"}
        mode={index % 2 === 0 ? "dark" : "light"}
        {...item}
        lessons={item.lessons.length}
      />
    </Link>
  ));

  return (
    <>
      <Helmet>
        <title>Student Dashboard</title>
      </Helmet>

      <Shared.Layout.Header title={"Dashboard"} />

      <section className="flex gap-5">
        <div className="flex-grow pt-5 space-y-9">
          <div className="space-y-5">
            <Shared.Components.Typography name={"h2"}>
              OVERVIEW
            </Shared.Components.Typography>

            <div className="grid grid-cols-4 gap-8">
              <Shared.Components.CardPoint
                icon={<Shared.Components.Icons name={"course"} />}
                title={"Courses in progress"}
              >
                3
              </Shared.Components.CardPoint>

              <Shared.Components.CardPoint
                icon={<Shared.Components.Icons name={"prototype"} />}
                title={"Active Prototypes"}
              >
                7
              </Shared.Components.CardPoint>

              <Shared.Components.CardPoint
                icon={<Shared.Components.Icons name={"clock"} />}
                title={"Hours Learning"}
              >
                3h 15m
              </Shared.Components.CardPoint>

              <Shared.Components.CardPoint
                icon={<Shared.Components.Icons name={"score"} />}
                title={"Community score"}
              >
                240
              </Shared.Components.CardPoint>
            </div>
          </div>

          <Shared.Components.Statistics
            className={"border rounded-xl p-5 shadow flex-grow"}
            data={[2, 5, 6, 7, 8, 3, 1]}
            title={"Results"}
          />

          <div className="space-y-5">
            <Shared.Components.Typography name={"h2"}>
              MY COURSES
            </Shared.Components.Typography>

            <div className="flex gap-5">{enrolledCoursesItem}</div>
          </div>
        </div>

        <aside className="w-96 pt-5 space-y-5">
          <div className="space-y-2">
            <Shared.Components.Typography name={"h2"}>
              Calendar
            </Shared.Components.Typography>

            <Calendar fullscreen={false} className="border" />
          </div>

          <div className="space-y-5">
            <Shared.Components.Typography name={"h2"}>
              Group
            </Shared.Components.Typography>

            <ul className="space-y-4">
              <li>
                <Link
                  to={"https://t.me/KhaetbekIT"}
                  className="flex gap-3 items-center"
                  target="_blank"
                >
                  <Shared.Components.Icons
                    name={"telegram"}
                    className={"text-blue-400"}
                  />

                  <Shared.Components.Typography>
                    Telegram
                  </Shared.Components.Typography>
                </Link>
              </li>

              <li>
                <Link
                  to={"https://t.me/KhaetbekIT"}
                  className="flex gap-3 items-center"
                  target="_blank"
                >
                  <Shared.Components.Icons
                    name={"instagram"}
                    className={"text-red-500"}
                  />

                  <Shared.Components.Typography>
                    Instagram
                  </Shared.Components.Typography>
                </Link>
              </li>

              <li>
                <Link
                  to={"https://t.me/KhaetbekIT"}
                  className="flex gap-3 items-center"
                  target="_blank"
                >
                  <Shared.Components.Icons
                    name={"youtube"}
                    className={"text-red-500"}
                  />

                  <Shared.Components.Typography>
                    YouTube
                  </Shared.Components.Typography>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
};
