import { Fragment } from "react";

const ContainedListItem = ({
  action,
  children,
  className,
  disabled,
  onClick,
  renderIcon,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};

export { ContainedListItem };
