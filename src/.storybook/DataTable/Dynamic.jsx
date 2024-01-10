import classNames from "classnames";
import { Fragment } from "react";

const Dynamic = ({ ...props }) => {
  const classes = classNames([className, "Dynamic"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Dynamic;
