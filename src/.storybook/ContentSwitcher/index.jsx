import propTypes from "prop-types";

const ContentSwitcher = ({
  children,
  className,
  onChange,
  selectedIndex,
  selectionMode,
  size,
  align,
  disabled,
  enterDelayMs,
  index,
  leaveDelayMs,
  name,
  onClick,
  onKeyDown,
  selected,
  text,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "ContainedList"]);
  return (
    <div className={classes} disabled={disabled} onClick={onClick} {...props}>
      <div onChange={onChange}> {name} </div>
    </div>
  );
};

ContentSwitcher.prototype = {
  children: propTypes.node,
  className: propTypes.string,
  onChange: propTypes.func,
  selectedIndex: propTypes.number,
  selectionMode: propTypes.oneOf(["automatic", "manual"]),
  size: propTypes.oneOf(["sm", "md", "lg"]),
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
  disabled: propTypes.bool,
  enterDelayMs: propTypes.number,
  index: propTypes.number,
  leaveDelayMs: propTypes.number,
  name: propTypes.oneOf(["string", "number"]),
  onClick: propTypes.func,
  onKeyDown: propTypes.func,
  selected: propTypes.bool,
  text: propTypes.string,
};

export default ContentSwitcher;
