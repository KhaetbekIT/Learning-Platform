import classNames from "classnames";
import { Fragment } from "react";

const Expansion = ({ ...props }) => {
  const classes = classNames([className, "Expansion"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Expansion;
