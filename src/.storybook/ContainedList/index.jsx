import propTypes from "prop-types";
import classnames from "classnames";

const ContainedList = ({
  

  isInset,
  kind,
  label,
  size,

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
  
  isInset: propTypes.bool,
  kind: propTypes.oneOf(["on-page", "disclosed"]),
  label: propTypes.oneOf(["string", "node"]),
  size: propTypes.oneOf(["sm", "md", "lg", "xl"]),
  
};

ContainedList.defaultProps = {
  disabled: "false",
  kind: "variants[0]",
};

export default ContainedList;
