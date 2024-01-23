import propTypes from "prop-types";
import classnames from "classnames";

const Popover = ({
  align,
  as,
  autoAlign,
  caret,
  children,
  className,
  dropShadow,
  highContrast,
  isTabTip,
  onRequestClose,
  open,
  ...props
}) => {
  const classes = classnames([className, "Popover"]);
  return (
    <div className={classes} open={open} {...props}>
      <button type="button" onClick={onClick}></button>
      <div className="Popover_wrap"> {children} </div>
    </div>
  );
};

Popover.prototype = {
  align: propTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-bottom",
    "right-top",
  ]),
  as: propTypes.oneOf(["string", "elementType"]),
  autoAlign: propTypes.bool,
  caret: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  dropShadow: propTypes.bool,
  highContrast: propTypes.bool,
  isTabTip: propTypes.bool,
  onRequestClose: propTypes.func,
  open: propTypes.bool,
};

Popover.defaultProps = {
  align: `isTabTip ? 'bottom-left' : 'bottom'`,
  as: "span",
  autoAlign: "false",
  caret: `isTabTip ? false : true`,
  dropShadow: "true",
  highContrast: "false",
};

export default Popover;
