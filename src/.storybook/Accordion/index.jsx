import { Fragment } from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const Accordion = ({
  align,
  children,
  className,
  disabled,
  size,
  as,
  ...props
}) => {
  const Tag = as;
  const classes = classnames([className, `media__${size}`, `accordion`]);

  return (
    <Fragment>
      <Tag className={classes} disabled={disabled}>
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
  size: propTypes.oneOf(["sm", "md", "lg"]),
  as: propTypes.oneOf(["ol", "ul"]).isRequired,
};

Accordion.defaultProps = {
  align: "end",
  disabled: false,
  as: "ul",
};

export default Accordion;
