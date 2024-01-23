import { Fragment } from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const FileUploader = ({
    accept,
    buttonKind,
    buttonLabel,
    className,
    disabled,
    filenameStatus,
    iconDescription,
    labelDescription,
    labelTitle,
    multiple,
    name,
    onChange,
    onClick,
    onDelete,
    size,
    children,
    ...props
}) => {
    const classes = classnames([className, `media__${size}`, `FileUploader`]
    )

    return (
        <Fragment>
            <div className={classes} disabled={disabled} {...props}>
                {children}
            </div>
        </Fragment>
    )
}

FileUploader.propTypes = {
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    classname: propTypes.string,
    disabled: propTypes.bool,
    filenameStatus: propTypes.oneOf(["edit", "complete", "uploading"]),
    iconDescription: propTypes.string,
    labelDescription: propTypes.string,
    labelTitle: propTypes.string,
    multiple: propTypes.bool,
    name: propTypes.string,
    onChange: propTypes.func,
    onClick: propTypes.func,
    onDelete: propTypes.func,
    size: propTypes.oneOf(["sm", "md", "lg"]),
    children: propTypes.node
}

export default FileUploader;