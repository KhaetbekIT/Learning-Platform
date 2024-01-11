import { Fragment } from "react";
import propTypes from "prop-types";

const ListItem = ({ className,  children,  ...props }) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};

ListItem.prototype = {
  children: propTypes.bool,
  className: propTypes.string
};

export { ListItem };
