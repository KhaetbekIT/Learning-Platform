import classNames from "classnames";
import PropTypes from "prop-types";

const Image = ({ src, className, title }) => (
  <img
    className={classNames("img", className)}
    loading={"lazy"}
    src={src}
    alt={title}
    title={title}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export { Image };
