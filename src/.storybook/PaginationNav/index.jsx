import { Fragment } from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const PaginationNav = ({
  className,
  disableOverflow,
  itemsShown,
  loop,
  onChange,
  page,
  totalItems,
  translateWithId,
  ...props
}) => {
  const classes = classnames([className, "PaginationNav"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <nav className="PaginationNav_wrap">{children}</nav>
      </div>
    </Fragment>
  );
};

PaginationNav.propTypes = {
  className: propTypes.string,
  disableOverflow: propTypes.bool,
  itemsShown: propTypes.number,
  loop: propTypes.bool,
  onChange: propTypes.func,
  page: propTypes.number,
  totalItems: propTypes.number,
  translateWithId: propTypes.func,
};

PaginationNav.defaultProps = {
  itemsShown: "10",
  loop: "false",
  onChange: "() => {}",
  page: "0",
  translateWithId: "[messageId]",
};

export default PaginationNav;
