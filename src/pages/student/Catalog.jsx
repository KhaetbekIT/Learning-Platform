import { Helmet } from "react-helmet";
import Shared from "../../shared/index.jsx";
import { Link, useLocation } from "react-router-dom";
import { useURLSearchParams } from "../../hooks/useURLSearchParams.jsx";
import { EnrolledCourses } from "../../db/index.jsx";
import classNames from "classnames";
import { useState } from "react";

const filterCard = (array = [], category) => {
  if (category && category !== "all") {
    return array
      .filter((item) => item?.id == category)
      .map((item, index) => (
        <Link
          to={`/Platform/student/my-courses/catalog/courses?enrolledCourse=${item.id}`}
          key={index}
        >
          <Shared.Components.CardCourseImage
            mode={index % 2 === 0 ? "dark" : "light"}
            className={"w-full"}
            {...item}
            lessons={item.lessons.length}
          />
        </Link>
      ));
  }
  return array.map((item, index) => (
    <Link
      to={`/Platform/student/my-courses/catalog/courses?enrolledCourse=${item.id}`}
      key={index}
    >
      <Shared.Components.CardCourseImage
        mode={index % 2 === 0 ? "dark" : "light"}
        className={"w-full"}
        {...item}
        lessons={item.lessons.length}
      />
    </Link>
  ));
};

export const Catalog = () => {
  const { search } = useLocation();
  const [SearchValue, setSearchValue] = useState("?catalogId=all");
  const catalogId = useURLSearchParams(search, "catalogId");

  const filterButton = EnrolledCourses.map((item, index) => (
    <Link
      to={`/Platform/student/my-courses/catalog?catalogId=${item.id}`}
      onClick={() => setSearchValue(`?catalogId=${item.id}`)}
      key={index}
      className={classNames(
        "border border-[#bdbdbd] py-1 px-2 rounded-2xl",
        search === `?catalogId=${item.id}`
          ? "border-[#2d9cdb]  text-[#2d9cdb]"
          : null,
      )}
    >
      {item.subtitle}
    </Link>
  ));

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      <Shared.Layout.Header title={"Catalog"} />

      <div className="flex gap-2 pt-5">
        <Link
          to={`/Platform/student/my-courses/catalog?catalogId=all`}
          onClick={() => setSearchValue(`?catalogId=all`)}
          className={classNames(
            "border border-[#bdbdbd] py-1 px-2 rounded-2xl",
            SearchValue === "?catalogId=all"
              ? "border-[#2d9cdb]  text-[#2d9cdb]"
              : null,
          )}
        >
          All
        </Link>
        {filterButton}
      </div>

      <div className="grid grid-cols-4 gap-5 pt-5">
        {filterCard(EnrolledCourses, catalogId)}
      </div>
    </>
  );
};
