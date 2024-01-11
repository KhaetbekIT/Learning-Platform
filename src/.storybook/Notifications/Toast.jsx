import { Fragment } from "react";
import propTypes from "prop-types";

const Toast = ({
  aria_label,
  ariaLabel,
  caption,
  children,
  className,
  hideCloseButton,
  kind,
  lowContrast,
  onClose,
  onCloseButtonClick,
  role,
  statusIconDescription,
  subtitle,
  timeout,
  title,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} role="status" {...props}>
        {children}
      </div>
    </Fragment>
  );
};

Toast.propTypes = {
  aria_label: propTypes.string,
  ariaLabel: propTypes.string,
  caption: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  hideCloseButton: propTypes.bool,
  kind: propTypes.oneOf([
    "error",
    "info",
    "info-square",
    "success",
    "warning",
    "warning-alt",
  ]),
  lowContrast: propTypes.bool,
  onClose: propTypes.func,
  onCloseButtonClick: propTypes.func,
  role: propTypes.oneOf(["alert", "log", "status"]),
  statusIconDescription: propTypes.string,
  subtitle: propTypes.string,
  timeout: propTypes.number,
  title: propTypes.string,
};

Toast.defaultProps = {
  hideCloseButton: "false",
  kind: "error",
  onCloseButtonClick: "noopFn",
  role: "status",
};

export default Toast;
