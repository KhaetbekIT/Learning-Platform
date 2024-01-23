import propTypes from "prop-types";
import classnames from "classnames";

const DatePicker = ({
  allowInput,
  appendTo,
  children,
  className,
  closeOnSelect,
  dateFormat,
  datePickerType,
  disable,
  enable,
  inline,
  invalid,
  locale,
  maxDate,
  minDate,
  onChange,
  onClose,
  onOpen,
  readOnly,
  short,
  value,
  warn,
  warnText,
  disabled,
  helperText,
  hideLabel,
  id,
  invalidText,
  labelText,
  onChange,
  onClick,
  size,
  placeholder,
  slug,
  type,
  range,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "DatePicker"]);
  return (
    <div className={classes} onClick={onClick} {...props}>
      <div className="DatePicker_format"> {dateFormat} </div>
      <div className="DatePicker_wrap"> {children} </div>
    </div>
  );
};

DatePicker.prototype = {
  allowInput: propTypes.bool,
  appendTo: propTypes.object,
  children: propTypes.node,
  className: propTypes.string,
  closeOnSelect: propTypes.bool,
  dateFormat: propTypes.string,
  datePickerType: propTypes.oneOfType([
    propTypes.oneOf(["simple", "single", "range"]),
  ]),
  disable: propTypes.array,
  enable: propTypes.array,
  inline: propTypes.bool,
  invalid: propTypes.bool,
  locale: propTypes.oneOf(["object", "ar", "at", "az", "be", "bg", "bn", "bs"]),
  maxDate: propTypes.oneOf(["string", "number"]),
  minDate: propTypes.oneOf(["string", "number"]),
  onChange: propTypes.func,
  onClose: propTypes.func,
  onOpen: propTypes.func,
  readOnly: propTypes.oneOf(["bool", "array"]),
  short: propTypes.oneOf(["true", "bool"]),
  value: propTypes.oneOf([
    "string",
    "string",
    "number",
    "object[]",
    "object",
    "number",
  ]),
  warn: propTypes.bool,
  warnText: propTypes.node,
  disabled: propTypes.bool,
  helperText: propTypes.node,
  hideLabel: propTypes.bool,
  id: propTypes.string,
  invalidText: propTypes.node,
  labelText: propTypes.node,
  onChange: propTypes.func,
  onClick: propTypes.func,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  placeholder: propTypes.string,
  slug: propTypes.node,
  type: propTypes.string,
  range: propTypes.bool,
};

DatePicker.defaultProps = {
  closeOnSelect: "true",
  dateFormat: "m/d/Y",
  length: "false",
  locale: "en",
  readOnly: "false",
  short: "false",
};

export default DatePicker;
