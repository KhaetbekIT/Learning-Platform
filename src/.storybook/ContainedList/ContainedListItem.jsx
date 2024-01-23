import { Fragment } from "react";
import propTypes from "prop-types";


const ContainedListItem = ({
  action,
  children,
  className,
  disabled,
  onClick,
  renderIcon,
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

ContainedListItem.prototype = {
  action: propTypes.node,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
};


export { ContainedListItem };
