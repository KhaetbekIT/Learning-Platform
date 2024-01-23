import { Fragment } from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const IconButton = ({
    align,
    children,
    className,
    closeOnActivation,
    defaultOpen,
    disabled,
    enterDelayMs,
    isSelected,
    kind,
    label,
    leaveDelayMs,
    size,
    wrapperClasses,
    ...props
}) => {
    const classes = classnames([className, `media__${size}`, `IconButton`])

    return (
        <Fragment>
            <div className={classes} disabled={disabled} {...props}>
                <p>{label}</p>
                {children}
            </div>
        </Fragment>
    )
}

IconButton.propTypes = {
    align: propTypes.oneOf([
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'right',]),
    children: propTypes.node,
    classname: propTypes.string,
    closeOnActivation: propTypes.bool,
    defaultOpen: propTypes.bool,
    disabled: propTypes.bool,
    enterDelayMs: propTypes.number,
    isSelected: propTypes.bool,
    kind: propTypes.oneOf([
        'primary',
        'secondary',
        'ghost',
        'tertiary',]),
    label: propTypes.node,
    leaveDelayMs: propTypes.number,
    size: propTypes.oneOf(['sm', 'md', 'lg']),
    wrapperClasses: propTypes.string
}

export default IconButton;