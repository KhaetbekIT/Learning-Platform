import propTypes from "prop-types";
import classnames from "classnames";

const ContainedList = ({
  action,
  children,
  className,
  isInset,
  kind,
  label,
  size,
  disabled,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "ContainedList"]);
  return (
    <div className={classes} onClick={onClick} >
      {children}
    </div>
  );
};

ContainedList.prototype = {
  action: propTypes.node,
  children: propTypes.node,
  className: propTypes.string,
  isInset: propTypes.bool,
  kind: propTypes.oneOf(["on-page", "disclosed"]),
  label: propTypes.oneOf(["string", "node"]),
  size: propTypes.oneOf(["sm", "md", "lg", "xl"]),
  disabled: propTypes.bool,
};

ContainedList.defaultProps = {
  disabled: "false",
  kind: "variants[0]",
};

export default ContainedList;
