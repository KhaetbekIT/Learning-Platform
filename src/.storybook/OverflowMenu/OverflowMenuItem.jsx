import propTypes from "prop-types";
import classnames from "classnames";

const OverflowMenuItem = ({
  className,
  closeMenu,
  disabled,
  handleOverflowMenuItemFocus,
  hasDivider,
  href,
  index,
  isDelete,
  itemText,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  requireTitle,
  title,
  wrapperClassName,
  ...props
}) => {
  const classes = classnames([className, "OverflowMenuItem"]);
  return (
    <div className={classes} {...props}>
      <div className="OverflowMenuItem"> {children} </div>
    </div>
  );
};

OverflowMenuItem.prototype = {
  className: propTypes.string,
  closeMenu: propTypes.func,
  disabled: propTypes.bool,
  handleOverflowMenuItemFocus: propTypes.func,
  hasDivider: propTypes.bool,
  href: propTypes.string,
  index: propTypes.number,
  isDelete: propTypes.bool,
  itemText: propTypes.node,
  onBlur: propTypes.func,
  onClick: propTypes.func,
  onFocus: propTypes.func,
  onKeyDown: propTypes.func,
  onKeyUp: propTypes.func,
  onMouseDown: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onMouseUp: propTypes.func,
  requireTitle: propTypes.bool,
  title: propTypes.string,
  wrapperClassName: propTypes.string,
};

OverflowMenuItem.defaultProps = {
  disabled: "false",
  hasDivider: "false",
  isDelete: "false",
  itemText: "Provide itemText",
  onClick: "() => {}",
  onKeyDown: "() => {}",
};

export default OverflowMenuItem;
