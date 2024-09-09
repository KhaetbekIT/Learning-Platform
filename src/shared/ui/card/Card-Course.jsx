import PropTypes from "prop-types";
import { Image } from "./../image/Image.jsx";
import Illustration1 from "./../../../assets/other/variant-1.svg";
import Illustration2 from "./../../../assets/other/variant-2.svg";
import {Icons} from "./../icon/Icons.jsx"

const CardCourse = ({
  course,
  title,
  logo,
  subtitle,
  by,
  lessons,
  illustration,
}) => {

  return (
    <div className="card-course" >
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
        <div className='card-course-description'>
          <div className='card-course-by'>
            <Icons name={"person"} />
            <h5 >
              {by}
            </h5>
          </div>
          
          <p className='card-course-lessons'>
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
};

export { CardCourse };
