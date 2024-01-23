import { Fragment } from "react";
import propTypes from "prop-types";

const Actionable = ({
  actionButtonLabel,
  aria_label,
  ariaLabel,
  children,
  className,
  closeOnEscape,
  hasFocus,
  hideCloseButton,
  inline,
  kind,
  lowContrast,
  onActionButtonClick,
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

Actionable.propTypes = {
  actionButtonLabel: propTypes.string,
  aria_label: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  closeOnEscape: propTypes.bool,
  hasFocus: propTypes.bool,
  hideCloseButton: propTypes.bool,
  inline: propTypes.bool,
  kind: propTypes.oneOf([
    "error",
    "info",
    "info-square",
    "success",
    "warning",
    "warning-alt",
  ]),
  lowContrast: propTypes.bool,
  onActionButtonClick: propTypes.func,
  onClose: propTypes.func,
  onCloseButtonClick: propTypes.func,
  role: propTypes.string,
  statusIconDescription: propTypes.string,
  subtitle: propTypes.node,
  title: propTypes.string,
};

Actionable.defaultProps = {
  closeOnEscape: "true",
  hasFocus: "true",
  hideCloseButton: "false",
  inline: "false",
  kind: "error",
  onCloseButtonClick: "noopFn",
  role: "alertdialog",
};

export default Actionable;
