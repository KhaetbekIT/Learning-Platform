import { Fragment } from "react";

const Switch = ({
  children,
  className,
  disabled,
  index,
  name,
  onClick,
  onKeyDown,
  selected,
  text,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} {...props}></div>
    </Fragment>
  );
};

export { Switch };
