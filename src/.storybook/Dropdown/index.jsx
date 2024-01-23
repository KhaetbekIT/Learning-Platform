import classnames from "classnames";
import propTypes from "prop-types";
import React, { Fragment, useState } from "react";

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
  sm,
  md,
  lg,
  color,
  sizeDropdown,
  slug,
  titleText,
  type,
  warn,
  warnText,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const classes = classnames([
    className,
    `media__sm-${sm}`,
    `media__md-${md}`,
    `media_lg-${lg}`,
    `dropdown`,
    `dropdown__${color}`,
    `dropdown__${sizeDropdown}`
  ]);

  const openDropdown = () => {
    setOpen((prev) => (!prev));
  };

  const item = items.map(({ ...option }, i) => (
    <Fragment key={i}>
      <li>{option.name}</li>
    </Fragment>
  ));

  return (
    <div className={classes} id={id} onClick={openDropdown} {...props}>
      <button type={type}>{initialSelectedItem}</button>
      <ul hidden={!open}>{item}</ul>
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
  lg: propTypes.string,
  sm: propTypes.string,
  md: propTypes.string,
  color: propTypes.oneOf(["primary", "secondary"]),
  sizeAccordion: propTypes.oneOf([`small`, `default`, `large`]),
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
  color: "primary",
  sizeAccordion: "default",
  lg: "default",
  md: "default",
  sm: "default",
};

export default Dropdown;
