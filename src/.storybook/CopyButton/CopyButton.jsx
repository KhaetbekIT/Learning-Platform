import { Fragment } from "react";

const CopyButton = ({
  align,
  className,
  feedback,
  feedbackTimeout,
  iconDescription,
  onClick,
  children,
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

export { CopyButton };
