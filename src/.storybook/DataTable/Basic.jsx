import classNames from "classnames";
import { Fragment } from "react";

const Basic = ({
  ...props
}) => {
  const classes = classNames([className, "Basic"]); 

  return (
    <Fragment>
      <div className={classes} {...props}>
        <Table rows={rows}>{children}</Table>
      </div>
    </Fragment>
  );
};

export default Basic;
