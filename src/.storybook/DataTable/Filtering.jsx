import classNames from "classnames";
import { Fragment } from "react";

const Filtering = ({ ...props }) => {
  const classes = classNames([className, "Filtering"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Filtering;
