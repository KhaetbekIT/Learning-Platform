import { Fragment } from "react";
import propTypes from "prop-types";


const CopyButton = ({
  align,
  className,
  feedback,
  feedbackTimeout,
  iconDescription,
  onClick,
  children,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};


CopyButton.prototype = {
  align: propTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "right",
  ]),
  className: propTypes.string,
  feedback: propTypes.string,
  feedbackTimeout: propTypes.number,
  iconDescription: propTypes.string,
  onClick: propTypes.func,
};

export { CopyButton };
