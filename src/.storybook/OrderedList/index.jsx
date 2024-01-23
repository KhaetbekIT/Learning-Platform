import propTypes from "prop-types";
import classnames from "classnames";

const OrderedList = ({
  children,
  className,
  isExpressive,
  native,
  nested,
  ...props
}) => {
  const classes = classnames([className, "OrderedList"]);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

OrderedList.prototype = {
  children: propTypes.node,
  className: propTypes.node,
  isExpressive: propTypes.bool,
  native: propTypes.bool,
  nested: propTypes.bool,
};

OrderedList.defaultProps = {
  isExpressive: "false",
  native: "false",
  nested: "false",
};

export default OrderedList;
