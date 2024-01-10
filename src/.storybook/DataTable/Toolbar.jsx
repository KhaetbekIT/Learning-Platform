import classNames from "classnames";
import { Fragment } from "react";

const Toolbar = ({ ...props }) => {
  const classes = classNames([className, "Toolbar"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Toolbar;
