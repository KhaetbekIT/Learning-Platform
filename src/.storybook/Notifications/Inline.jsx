import { Fragment } from "react";
import propTypes from "prop-types";

const Inline = ({
  aria_label,
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
  title,
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

Inline.propTypes = {
  aria_label: propTypes.string,
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
  title: propTypes.string,
};

Inline.defaultProps = {
  hideCloseButton: "false",
  kind: "error",
  onCloseButtonClick: "noopFn",
  role: "status",
};

export default Inline;
