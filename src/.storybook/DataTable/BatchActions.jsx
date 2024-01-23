import classNames from "classnames";
import { Fragment } from "react";

const BatchActions = ({ ...props }) => {
    
  const classes = classNames([className, "BatchActions"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default BatchActions;
