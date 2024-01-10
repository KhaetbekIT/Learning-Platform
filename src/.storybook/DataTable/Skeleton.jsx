import classNames from "classnames";
import { Fragment } from "react";

const Skeleton = ({ ...props }) => {
  const classes = classNames([className, "Skeleton"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Skeleton;
