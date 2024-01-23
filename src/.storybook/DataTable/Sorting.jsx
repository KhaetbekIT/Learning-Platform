import classNames from "classnames";
import { Fragment } from "react";

const Sorting = ({ ...props }) => {
  const classes = classNames([className, "Sorting"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Sorting;
