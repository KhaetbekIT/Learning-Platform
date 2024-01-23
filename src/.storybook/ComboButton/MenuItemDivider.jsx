import { Fragment } from "react";
import propTypes from "prop-types";


const MenuItemDivider = ({ className, ...props }) => {
  return (
    <Fragment>
      <div className={className} {...props}></div>
    </Fragment>
  );
};

MenuItemDivider.propTypes = {
  className: propTypes.string,
};

export { MenuItemDivider };
