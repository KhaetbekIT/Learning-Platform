import { Helmet } from "react-helmet";
import Shared from "../../shared/index.jsx";
import { useURLSearchParams } from "../../hooks/useURLSearchParams.jsx";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { EnrolledCourses } from "../../db/index.jsx";
import { Alert } from "antd";

export const CoursesLists = () => {
  const { search } = useLocation();
  const enrolledCourseId = useURLSearchParams(search, "enrolledCourse");
  const courses = useMemo(() => {
    return EnrolledCourses.filter(
      (item) => String(item.id) === enrolledCourseId,
    );
  }, [EnrolledCourses]);

  const coursesItem = courses[0]?.lessons?.map((item, index) => (
    <li key={index}>
      <Link
        to={`/Platform/student/my-courses/catalog/details?detailId=${item.id}&catalogId=${courses[0].id}`}
        className={"inline-flex gap-5"}
      >
        <div className={"w-[90px] h-[90px] overflow-hidden rounded"}>
          <Shared.Components.Image src={item.icon} className={"h-full"} />
        </div>

        <div className={"space-y-5"}>
          <Shared.Components.Typography name={"h5"}>
            {item.title}
          </Shared.Components.Typography>
          <Alert
            message={index % 2 === 0 ? "Success" : "Pending"}
            type={index % 2 === 0 ? "success" : "info"}
            showIcon
          />
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <Helmet>
        <title>Lists - {courses[0]?.title}</title>
      </Helmet>
      <Shared.Layout.Header title={"Courses List - " + courses[0]?.title} />
      <ul className="space-y-5 py-5">{coursesItem}</ul>
    </>
  );
};
