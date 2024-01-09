const ComboButton = ({
  children,
  className,
  disabled,
  label, onClick, size,
  tooltipAlignment,  translateWithId, kind, shortcut, renderIcon,
}) => {
  const classes = classnames([className, `media__${size}`, "combobutton"]);
  return (
    <div className={classes} disabled={disabled}>
      {children}
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
    "top", "top-left", "top-right", "bottom",  "bottom-left", "bottom-right", "left", "right",
  ]),
  translateWithId: propTypes.func,
  kind: propTypes.oneOfType([propTypes.oneOf(["default", "danger"])]),
  shortcut: propTypes.string,
  renderIcon: propTypes.oneOf(["func", "object", "basic"]),
};

ComboButton.defaultProps = {
  size: "lg",
  kind: "default",
};

export default ComboButton;
