import { Fragment } from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const FileUploaderItem = ({
    children,
    className,
    errorBody,
    errorSubject,
    iconDescription,
    invalid,
    name,
    onDelete,
    size,
    status,
    uuid,
    ...props
}) => {
    const classes = classNames([className, `media__${size}`, `FileUploaderItem`])

    return (
        <Fragment>
            <div className={classes} {...props}>
                {children}
            </div>
        </Fragment>
    )
}

FileUploaderItem.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    errorBody: propTypes.string,
    errorSubject: propTypes.string,
    iconDescription: propTypes.string,
    invalid: propTypes.bool,
    name: propTypes.string,
    onDelete: propTypes.func,
    size: propTypes.oneOf(["sm", "md", "lg"]),
    status: propTypes.oneOf(["uploading", "edit", "complete"]),
    uuid: propTypes.string
}

FileUploaderItem.defaultProps = {
    className: "",
    onDelete: "noopFn",
    status: uploading
}

export { FileUploaderItem }