import { Fragment } from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const NumberInput = ({
  allowEmpty,
  className,
  defaultValue,
  disabled,
  disableWheel,
  helperText,
  hideLabel,
  hideSteppers,
  iconDescription,
  id,
  invalid,
  invalidText,
  label,
  light,
  max,
  min,
  onChange,
  onClick,
  onKeyUp,
  readOnly,
  size,
  slug,
  step,
  translateWithId,
  value,
  warn,
  warnText,
  ...props
}) => {
const classes = classnames([className, `media__${size}`, "NumberInput"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <label className="NumberInput_wrap">{children}</label>
      </div>
    </Fragment>
  );
};

NumberInput.propTypes = {
  allowEmpty: propTypes.bool,
  className: propTypes.string,
  defaultValue: propTypes.oneOf("number", "string"),
  disabled: propTypes.bool,
  disableWheel: propTypes.bool,
  helperText: propTypes.node,
  hideLabel: propTypes.bool,
  hideSteppers: propTypes.bool,
  iconDescription: propTypes.string,
  id: propTypes.string,
  invalid: propTypes.bool,
  invalidText: propTypes.node,
  label: propTypes.node,
  light: propTypes.bool,
  max: propTypes.number,
  min: propTypes.number,
  onChange: propTypes.func,
  onClick: propTypes.func,
  onKeyUp: propTypes.func,
  readOnly: propTypes.bool,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  slug: propTypes.node,
  step: propTypes.number,
  translateWithId: propTypes.func,
  value: propTypes.oneOf(["number", "string"]),
  warn: propTypes.bool,
  warnText: propTypes.node,
};

export default NumberInput;
