import propTypes from "prop-types";

const ComposedModal = ({
  aria_label,
  aria_labelledby,
  children,
  className,
  containerClassName,
  danger,
  isFullWidth,
  launcherButtonRef,
  onClose,
  onKeyDown,
  open,
  preventCloseOnClickOutside,
  selectorPrimaryFocus,
  selectorsFloatingMenus,
  size,
  slug,
  buttonOnClick,
  closeClassName,
  closeIconClassName,
  closeModal,
  iconDescription,
  label,
  labelClassName,
  title,
  titleClassName,
  inputref,
  loadingDescription,
  loadingIconDescription,
  loadingStatus,
  onLoadingSuccess,
  onRequestClose,
  onRequestSubmit,
  primaryButtonDisabled,
  primaryButtonText,
  primaryClassName,
  secondaryButtons,
  secondaryButtonText,
    secondaryClassName,
  
}) => {
  const classes = classnames([className, `media__${size}`, "ComposedModal"]);
  return (
    <div className={classes}>
          <div className="ComposedModal_title"> {title} </div>
          
      <button type="button" onClick={buttonOnClick}>
        {onRequestClose}
      </button>
      <button type="button" onClick={buttonOnClick}>
        {onRequestSubmit}
      </button>
    </div>
  );
};

ComposedModal.prototype = {
  aria_label: propTypes.string, 
  aria_labelledby: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  containerClassName: propTypes.string,
  danger: propTypes.bool,
  isFullWidth: propTypes.bool,
  launcherButtonRef: propTypes.func | { current: any },
  onClose: propTypes.func,
  onKeyDown: propTypes.func,
  open: propTypes.bool,
  preventCloseOnClickOutside: propTypes.bool,
  selectorPrimaryFocus: propTypes.string,
  selectorsFloatingMenus: propTypes.string,
  size: propTypes.oneOf(["xs", "sm", "md", "lg"]),
  slug: propTypes.node,
  buttonOnClick: propTypes.func,
  closeClassName: propTypes.string,
  closeIconClassName: propTypes.string,
  closeModal: propTypes.func,
  iconDescription: propTypes.string,
  label: propTypes.node,
  labelClassName: propTypes.string,
  title: propTypes.node,
  titleClassName: propTypes.string,
  inputref: propTypes.func | { current: any },
  loadingDescription: propTypes.string,
  loadingIconDescription: propTypes.string,
  loadingStatus: propTypes.oneOfType([
    propTypes.oneOf(["inactive", "active", "finished", "error"]),
  ]),
  onLoadingSuccess: propTypes.func,
  onRequestClose: propTypes.func,
  onRequestSubmit: propTypes.func,
  primaryButtonDisabled: propTypes.bool,
  primaryButtonText: propTypes.string,
  primaryClassName: propTypes.string,
  secondaryButtons: propTypes.func,
  secondaryButtonText: propTypes.string,
  secondaryClassName: propTypes.string,
};

ComposedModal.defaultProps = {
  selectorPrimaryFocus: "[data-modal-primary-focus]",
  iconDescription: "Close",
  closeModal: "noopFn",
  loadingStatus: "inactive",
  onLoadingSuccess: "noopFn",
  onRequestClose: "noopFn",
  onRequestSubmit: "noopFn",
};

export default ComposedModal;