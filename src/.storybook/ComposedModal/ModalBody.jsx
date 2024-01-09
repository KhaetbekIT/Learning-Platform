import { Fragment } from "react";


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
            <div className={className} {...props}  >

            </div>
        </Fragment>
    )
};

export {ModalBody}