import { Helmet } from "react-helmet";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useURLSearchParams } from "../../hooks/useURLSearchParams.jsx";
import { EnrolledCourses } from "../../db/index.jsx";
import Shared from "../../shared/index.jsx";
import { Alert, Form, Input } from "antd";

export const Details = () => {
  const { search, pathname } = useLocation();
  const catalogId = useURLSearchParams(search, "catalogId");
  const detailId = useURLSearchParams(search, "detailId");

  const detailsItem = useMemo(() => {
    const catalog = EnrolledCourses.find(
      (item) => String(item.id) === catalogId,
    );
    const details = catalog.lessons.find(
      (item) => String(item.id) === detailId,
    );

    return { details, catalog };
  }, [catalogId, detailId]);

  const videosItem = detailsItem.details.videos.map((item, index) => (
    <li key={index} className={"space-y-5"}>
      <Shared.Components.Typography name={"h3"}>
        {item.label}
      </Shared.Components.Typography>
      <div className="bg-gray-500">
        <video
          src={item.url}
          poster={item.cover}
          controls
          className={"w-full"}
        />
      </div>
    </li>
  ));

  const linksItem = detailsItem.details.links.map((item, index) => (
    <li key={index}>
      <Link
        to={item.url}
        className={"underline text-sky-600"}
        target={"_blank"}
      >
        {item.label}
      </Link>
    </li>
  ));

  const onFinish = async (values) => {
    console.log(values);
  };

  const getLessonUrl = (offset) => {
    const currentLessonIndex = detailsItem.catalog.lessons.findIndex(
      (lesson) => String(lesson.id) === detailId,
    );
    const targetLesson =
      detailsItem.catalog.lessons[currentLessonIndex + offset];

    return targetLesson
      ? `/Platform/student/my-courses/catalog/details?detailId=${targetLesson.id}&catalogId=${catalogId}`
      : pathname + search;
  };

  const isFirstLesson =
    String(detailsItem.details.id) ===
    String(detailsItem.catalog.lessons[0].id);
  const isLastLesson =
    String(detailsItem.details.id) ===
    String(
      detailsItem.catalog.lessons[detailsItem.catalog.lessons.length - 1].id,
    );

  const Prev = {
    url: isFirstLesson ? pathname + search : getLessonUrl(-1),
    color: isFirstLesson ? "#cdcdcd" : undefined,
  };

  const Next = {
    url: isLastLesson ? pathname + search : getLessonUrl(1),
    color: isLastLesson ? "#cdcdcd" : undefined,
  };

  return (
    <>
      <Helmet>
        <title>Details - {detailsItem.details.title}</title>
      </Helmet>

      <section className="py-5 space-y-5 text-center">
        <Link
          to={`/Platform/student/my-courses/catalog/courses?enrolledCourse=${catalogId}`}
          className="block pb-5 border-b"
        >
          <Shared.Components.Typography name="h2" className="text-gray-400">
            {detailsItem.catalog.title}
          </Shared.Components.Typography>
        </Link>

        <div className="flex items-center justify-between">
          <Shared.Components.Button
            to={Prev.url}
            className="text-sm py-2.5 px-3"
            style={{ background: Prev.color }}
          >
            Prev
          </Shared.Components.Button>

          <Shared.Components.Typography name="h2">
            {detailsItem.details.title}
          </Shared.Components.Typography>

          <Shared.Components.Button
            to={Next.url}
            className="text-sm py-2.5 px-3"
            style={{ background: Next.color }}
          >
            Next
          </Shared.Components.Button>
        </div>

        <article className="space-y-5 max-w-[960px] w-full mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gray-400">
            <Shared.Components.Image src={detailsItem.details.icon} />
          </div>

          {videosItem.length !== 0 && (
            <ol className={"space-y-5"}>{videosItem}</ol>
          )}

          {linksItem.length !== 0 && (
            <>
              <Shared.Components.Typography name={"h2"}>
                Links
              </Shared.Components.Typography>

              <ul className={"text-start space-y-5"}>{linksItem}</ul>
            </>
          )}

          {detailsItem.details.details && (
            <div className={"bg-gray-200 rounded p-5 text-start space-y-5"}>
              <blockquote>{detailsItem.details.details}</blockquote>

              <Form onFinish={onFinish} layout={"vertical"}>
                <Form.Item name={"link"} className={"Link"}>
                  <Input placeholder={"URL"} className={"w-full h-[50px]"} />
                </Form.Item>

                <div className="flex justify-between items-center">
                  <Shared.Components.Button
                    className={"text-base px-3 py-2.5"}
                    active
                    htmlType={"submit"}
                  >
                    Send
                  </Shared.Components.Button>

                  <Alert message={"Checking"} type={"info"} showIcon />
                </div>
              </Form>
            </div>
          )}
        </article>
      </section>
    </>
  );
};
