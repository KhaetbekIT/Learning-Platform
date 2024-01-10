import classNames from "classnames";
import propTypes from "prop-types";
import { Fragment } from "react";

const DefinitionTooltip = ({
  align,
  children,
  className,
  defaultOpen,
  definition,
  id,
  openOnHover,
  triggerClassName,
  ...props
}) => {
  const classes = classNames([className], "DefinitionTooltip");

  return (
    <Fragment>
      <div className={classes} {...props} >{children}</div>
    </Fragment>
  );
};

DefinitionTooltip.propTypes = {
  align: propTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "left-bottom",
  ]),
  children: propTypes.node,
  className: propTypes.string,
  defaultOpen: propTypes.bool,
  definition: propTypes.node,
  id: propTypes.string,
  openOnHover: propTypes.bool,
  triggerClassName: propTypes.string,
};

DefinitionTooltip.defaultProps = {
  align: "bottom-left",
  defaultOpen: "false",
};

export default DefinitionTooltip;
