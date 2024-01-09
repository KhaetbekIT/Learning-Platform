import classnames from "classnames";
import propTypes from "prop-types";
import React, { Fragment } from "react";

const Dropdown = ({
  arialabel,
  className,
  direction,
  disabled,
  helperText,
  hideLabel,
  id,
  initialSelectedItem,
  invalid,
  invalidText,
  items,
  itemToElement,
  itemToString,
  label,
  onChange,
  readOnly,
  renderSelectedItem,
  selectedItem,
  size,
  slug,
  titleText,
  type,
  warn,
  warnText,
  children,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "dropdown"]);

  const item = items.map(({ ...option }, i) => (
    <Fragment key={i}>
      <li>{option.name}</li>
    </Fragment>
  ));

  return (
    <div className={classes} id={id} onClick={() => console.log("dropdown")}>
      <button type={type}>{initialSelectedItem}</button>
      <ul hidden={false}>{item}</ul>
    </div>
  );
};

Dropdown.propTypes = {
  arialabel: propTypes.string,
  className: propTypes.string,
  direction: propTypes.oneOf(["top", "bottom"]),
  disabled: propTypes.bool,
  helperText: propTypes.node,
  hideLabel: propTypes.bool,
  id: propTypes.string,
  initialSelectedItem: propTypes.any,
  invalid: propTypes.bool,
  invalidText: propTypes.node,
  items: propTypes.array,
  itemToElement: propTypes.func,
  itemToString: propTypes.func,
  label: propTypes.node,
  onChange: propTypes.func,
  readOnly: propTypes.bool,
  renderSelectedItem: propTypes.func,
  selectedItem: propTypes.any,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  slug: propTypes.node,
  titleText: propTypes.node,
  warn: propTypes.bool,
  warnText: propTypes.node,
  type: propTypes.oneOfType([propTypes.oneOf(["default", "inline"])]),
  as: propTypes.string,
  children: propTypes.node,
};

Dropdown.defaultProps = {
  direction: "bottom",
  disabled: false,
  itemToString: (item) => {
    if (typeof item === "string") {
      return item;
    } else if (typeof item === "number") {
      return `${item}`;
    } else if (
      item !== null &&
      typeof item === "object" &&
      "label" in item &&
      typeof item["label"] === "string"
    ) {
      return item["label"];
    }
    return "";
  },
  type: "default",
};

export default Dropdown;
