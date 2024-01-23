import propTypes from "prop-types";
import classnames from "classnames";

const ContentSwitcher = ({
  onChange,
  selectedIndex,
  selectionMode,
  size,
  align,
  enterDelayMs,
  leaveDelayMs,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "ContentSwitcher"]);
  return (
    <div className={classes} disabled={disabled} onClick={onClick} {...props}>
      <div className="ContentSwitcher_name" onChange={onChange}>
        {name}
      </div>
      <div className="ContentSwitcher_wrap"> {children} </div>
    </div>
  );
};

ContentSwitcher.prototype = {
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

  enterDelayMs: propTypes.number,
  leaveDelayMs: propTypes.number,
};

export default ContentSwitcher;
