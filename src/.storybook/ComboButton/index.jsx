import propTypes from "prop-types";

const ComboButton = ({
  children,
  className,
  disabled,
  label,
  onClick,
  size,
  tooltipAlignment,
  translateWithId,
  kind,
  shortcut,
  renderIcon,
}) => {
  const classes = classnames([className, `media__${size}`, "ComboButton"]);
  return (
    <div className={classes} disabled={disabled}>
      <div className="ComboButton__wrap">
        <p className="ComboButton__label">{label}</p>
        <button type="button" onClick={onClick}>
          {" "}
          {renderIcon}{" "}
        </button>
      </div>
      <div className="ComboButton__content">{children}</div>
    </div>
  );
};

ComboButton.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  label: propTypes.string,
  onClick: propTypes.func,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  tooltipAlignment: propTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "right",
  ]),
  translateWithId: propTypes.func,
  kind: propTypes.oneOfType([propTypes.oneOf(["default", "danger"])]),
  shortcut: propTypes.string,
  renderIcon: propTypes.oneOf(["func", "object", "basic"]).isRequired ,
};

ComboButton.defaultProps = {
  size: "lg",
  kind: "default",
  label: "Primary action",
  renderIcon: "basic",
};

export default ComboButton;
