import propTypes from "prop-types";
import classnames from "classnames";


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
  const classes = classnames([className, "CopyButton"]);
  return (
    <div className={classes} onClick={onClick} {...props}>
      <button type="buttom"> {align} </button>
      <div className="CopyButton_wrap"> {children} </div>
    </div>
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

CopyButton.defaultProps = {
  align: "bottom",
  feedback: "Copied",
  feedbackTimeout: "2000",
  iconDescription: "Copy to clipboard",
  onClick: "noopFn",
};

export default CopyButton;
