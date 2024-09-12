import PropTypes from "prop-types";
import classNames from "classnames";
import { Image } from "./../image/Image.jsx";
import Illustration1 from "./../../../assets/other/variant-1.svg";
import Illustration2 from "./../../../assets/other/variant-2.svg";
import { Icons } from "./../icon/Icons.jsx";

const CardCourse = ({
  course,
  title,
  logo,
  subtitle,
  by,
  lessons,
  illustration,
  onClick,
}) => {
  return (
    <div className="card-course" onClick={onClick}>
      <header className={"card-course-header"}>
        <h2 className={"card-course-name"}>{course}</h2>
        <h3 className={"card-course-title"}>{title}</h3>
        <Image className="card-course-logo" src={logo} />

        <Image
          className="card-course-image"
          src={
            illustration === "first"
              ? Illustration1
              : illustration === "second"
                ? Illustration2
                : undefined
          }
        />
      </header>
      <footer className="card-course-footer">
        <h2 className="card-course-subtitle">{subtitle}</h2>
        <div className="card-course-description">
          <div className="card-course-by">
            <Icons name={"person"} />
            <h5>{by}</h5>
          </div>

          <p className="card-course-lessons">
            {lessons > 1 ? `${lessons} lessons` : `${lessons} lesson`}
          </p>
        </div>
      </footer>
    </div>
  );
};

CardCourse.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  subtitle: PropTypes.string,
  by: PropTypes.string,
  lessons: PropTypes.number,
  illustration: PropTypes.oneOf(["first", "second"]),
  onClick: PropTypes.func,
};

const CardCourseImage = ({
  mode,
  lessons,
  subtitle,
  title,
  by,
  icon,
  onClick,
  className
}) => {
  return (
    <div
      className={classNames("card-course card-course--image", mode, className)}
      onClick={onClick}
    >
      <header className="card-course--image-header">
        <div className="card-course--image-header-top">
          <div className="card-course--image-icon">
            <Icons name={"course"} />
          </div>

          <p className="card-course-lessons">
            {lessons &&
              (lessons > 1 ? `${lessons} lessons` : `${lessons} lesson`)}
          </p>
        </div>

        <h4 className="card-course--image-subtitle">{subtitle}</h4>

        <h2 className="card-course--image-title">{title}</h2>
      </header>

      <footer className="card-course--image-footer">
        <div className="card-course-by">
          <Icons name={"person"} />
          <h5>{by}</h5>
        </div>

        <Image src={icon} title={title} className="card-course-footer-icon" />
      </footer>
    </div>
  );
};

CardCourseImage.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
  lessons: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  by: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export { CardCourse, CardCourseImage };
