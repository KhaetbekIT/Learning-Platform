import classNames from "classnames";
import { Fragment } from "react";

const Selection = ({ ...props }) => {
  const classes = classNames([className, "Selection"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Selection;
