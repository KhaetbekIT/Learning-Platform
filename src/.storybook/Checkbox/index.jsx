import { Fragment } from "react"
import propTypes from 'prop-types'
import classNames from "classnames"

const Checkbox = ({
    checked,
    className,
    defaultChecked,
    disabled,
    helperText,
    hideLabel,
    id,
    indeterminate,
    invalid,
    invalidText,
    labelText,
    onChange,
    readOnly,
    slug,
    title,
    warn,
    warnText,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `checkbox`
            ])
    return (
        <Fragment>
            <div
                className={classes}
                disabled={disabled}
                id={id}
                {...props}
            >

            </div>
        </Fragment>
    )
}

Checkbox.propTypes = {
    checked: propTypes.bool,
    className: propTypes.string,
    defaultChecked: propTypes.bool,
    disabled: propTypes.bool,
    helperText: propTypes.node,
    hideLabel: propTypes.bool,
    id: propTypes.string,
    indeterminate: propTypes.bool,
    invalid: propTypes.bool,
    invalidText: propTypes.node,
    labelText: propTypes.node,
    onChange: propTypes.func,
    readOnly: propTypes.bool,
    slug: propTypes.node,
    title: propTypes.string,
    warn: propTypes.bool,
    warnText: propTypes.node,
}

Checkbox.defaultProps = {
    indeterminate: false,
    onChange: noopFn,
}

export default Checkbox;