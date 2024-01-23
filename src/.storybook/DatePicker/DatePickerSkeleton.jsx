import { Fragment } from "react";
import propTypes from "prop-types";

const DatePickerSkeleton = ({
  className,
  hideLabel,
  children,
  id,
  range,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};

DatePickerSkeleton.prototype = {
  hideLabel: propTypes.string,
  children: propTypes.bool,
  id: propTypes.string,
  range: propTypes.bool,
};

export { DatePickerSkeleton };
