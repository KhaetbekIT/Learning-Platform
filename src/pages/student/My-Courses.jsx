import { Helmet } from "react-helmet";
import Shared from "../../shared/index.jsx";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import { Courses, EnrolledCourses } from "../../db/index.jsx";

export const MyCourses = () => {
  const courseItem = Courses.map((item, index) => {
    return (
      <Link
        to={
          item.status
            ? `/Platform/student/my-courses/catalog?catalogId=${item.id}`
            : `/Platform/student/my-courses/`
        }
        className={"inline-flex gap-5 flex-grow-0"}
        key={index}
      >
        <Shared.Components.Button
          icon={
            <Shared.Components.Icons
              name={"model"}
              className={index % 2 === 0 ? "text-[#9747ff]" : "text-[#82acf5]"}
            />
          }
          className={index % 2 === 0 ? "bg-[#e5d1ff]" : "bg-[#c6d9fb]"}
        />

        <div className={"space-y-5"}>
          <Shared.Components.Typography name={"h5"}>
            {item.title}
          </Shared.Components.Typography>

          {item.status && (
            <Progress showInfo={false} percent={item.percent} size="small" />
          )}
        </div>
      </Link>
    );
  });

  const enrolledCoursesItem = EnrolledCourses.map((item, index) => (
    <Link
      to={`/Platform/student/my-courses/catalog/courses?enrolledCourse=${item.id}`}
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
        <title>My Courses</title>
      </Helmet>

      <Shared.Layout.Header title={"My Courses"} />

      <section className="flex gap-5">
        <div className="flex-grow pt-5 space-y-9">
          <div className="space-y-5">
            <Shared.Components.Typography name={"h3"}>
              All status
            </Shared.Components.Typography>

            <div className="rounded-[8px] border shadow grid grid-cols-4 py-14">
              {/*  Start */}
              <div className={"px-14 space-y-2 border-r"}>
                <Shared.Components.Icons
                  name={"model"}
                  className={"text-[#82acf5] cursor-default"}
                />

                <Shared.Components.Typography name={"text"}>
                  3/7 courses
                </Shared.Components.Typography>
              </div>
              {/*    End */}
              {/*  Start */}
              <div className={"px-14 space-y-2 border-r"}>
                <Shared.Components.Icons
                  name={"app-registration"}
                  className={"text-[#82acf5] cursor-default"}
                />

                <Shared.Components.Typography name={"text"}>
                  30/70 quizzes
                </Shared.Components.Typography>
              </div>
              {/*    End */}
              {/*  Start */}
              <div className={"px-14 space-y-2 border-r"}>
                <Shared.Components.Icons
                  name={"controller"}
                  className={"text-[#82acf5] cursor-default"}
                />

                <Shared.Components.Typography name={"text"}>
                  2 prototypes
                </Shared.Components.Typography>
              </div>
              {/*    End */}
              {/*  Start */}
              <div className={"px-14 space-y-2"}>
                <Shared.Components.Icons
                  name={"timelapse"}
                  className={"text-[#82acf5] cursor-default"}
                />

                <Shared.Components.Typography name={"text"}>
                  2 hours learning
                </Shared.Components.Typography>
              </div>
              {/*    End  */}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex justify-between">
              <Shared.Components.Typography name={"h3"}>
                All Academic Courses
              </Shared.Components.Typography>

              <Shared.Components.Button
                active
                icon={<Shared.Components.Icons name={"course"} />}
                className={"uppercase"}
                to={"/Platform/student/my-courses/catalog?catalogId=all"}
              >
                courses
              </Shared.Components.Button>
            </div>
            <div className="flex flex-col gap-5">{courseItem}</div>
          </div>
        </div>

        <aside className="w-96 pt-5 space-y-5">
          <Shared.Components.WeeklyCalendar />

          <div className="space-y-5">{enrolledCoursesItem}</div>
        </aside>
      </section>
    </>
  );
};
