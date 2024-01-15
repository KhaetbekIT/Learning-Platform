import { Fragment } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import "./accardion.scss";

const Accordion = ({
  align,
  children,
  className,
  disabled,
  sm,
  md,
  lg,
  as,
  color,
  sizeAccordion,
  ...props
}) => {
  const Tag = as;

  const classes = classnames([
    className,
    // `media__${size}`,
    `media__sm-${sm}`,
    `media__md-${md}`,
    `media__lg-${lg}`,
    `accordion`,
    `accordion__${color}`,
    `accordion__${sizeAccordion}`,
  ]);

  return (
    <Fragment>
      <Tag className={classes} disabled={disabled} {...props}>
        {children}
      </Tag>
    </Fragment>
  );
};

Accordion.propTypes = {
  align: propTypes.oneOf(["start", "end"]).isRequired,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  lg: propTypes.string,
  sm: propTypes.string,
  md: propTypes.string,
  as: propTypes.oneOf(["ol", "ul"]).isRequired,
  color: propTypes.oneOf(["primary", "secondary"]),
  sizeAccordion: propTypes.oneOf([`small`, `default`, `large`]),
};

Accordion.defaultProps = {
  align: "end",
  disabled: false,
  as: "ul",
  color: "primary",
  sizeAccordion: "default",
  lg: "default",
  md: "default",
  sm: "default",
};

export default Accordion;
