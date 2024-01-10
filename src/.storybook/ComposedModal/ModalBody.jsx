import { Fragment } from "react";
import propTypes from "prop-types";


const ModalBody = ({
  aria_label,
  children,
  className,
  hasForm,
  hasScrollingContent,
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


ModalBody.prototype = {
  aria_label: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  hasForm: propTypes.bool,
  hasScrollingContent: propTypes.bool,
};

export { ModalBody };
