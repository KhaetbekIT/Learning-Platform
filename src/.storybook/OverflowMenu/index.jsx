import { Fragment } from "react";
import propTypes from "prop-types";

import classnames from "classnames";

const OverflowMenu = ({
  aria_label,
  ariaLabel,
  children,
  className,
  direction,
  flipped,
  focusTrap,
  iconClass,
  iconDescription,
  id,
  light,
  menuOffset,
  menuOffsetFlip,
  menuOptionsClass,
  onClick,
  onClose,
  onFocus,
  onKeyDown,
  onOpen,
  open,
  renderIcon,
  selectorPrimaryFocus,
  size,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "OverflowMenu"]);
  return (
    <Fragment>
      <div className={classes} {...props}>
        <div className="OverflowMenu_wrap"> {children} </div>
      </div>
    </Fragment>
  );
};

OverflowMenu.prototype = {
  aria_label: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  flipped: propTypes.bool,
  focusTrap: propTypes.bool,
  iconClass: propTypes.string,
  iconDescription: propTypes.string,
  id: propTypes.string,
  light: propTypes.bool,
  menuOffset: propTypes.func,
  menuOffsetFlip: propTypes.func,
  menuOptionsClass: propTypes.string,
  onClick: propTypes.func,
  onClose: propTypes.func,
  onFocus: propTypes.bool,
  onKeyDown: propTypes.func,
  onOpen: propTypes.func,
  open: propTypes.bool,
  renderIcon: propTypes.oneOf(["func", "object"]),
  selectorPrimaryFocus: propTypes.string,
  size: propTypes.oneOf(["sm", "md", "lg"]),
};

export { OverflowMenu };
