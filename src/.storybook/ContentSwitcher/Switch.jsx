import { Fragment } from "react";
import propTypes from "prop-types";

const Switch = ({
  children,
  className,
  disabled,
  index,
  name,
  onClick,
  onKeyDown,
  selected,
  text,
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


Switch.prototype = {
  children: propTypes.node,
  className: propTypes.string,
disabled: propTypes.bool,
  index: propTypes.number,
name: propTypes.oneOf(["string", "number"]),
onClick: propTypes.func,
 onKeyDown: propTypes.func,
  selected: propTypes.bool,
  text: propTypes.string,
};

export { Switch };
