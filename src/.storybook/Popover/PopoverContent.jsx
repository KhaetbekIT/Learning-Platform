import { Fragment } from "react";
import propTypes from "prop-types";

const PopoverContent = ({ className, children, ...props }) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};

PopoverContent.prototype = {
  className: propTypes.string,
  children: propTypes.node,
};

export { PopoverContent };
