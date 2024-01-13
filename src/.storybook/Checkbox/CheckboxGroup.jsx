import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const CheckboxGroup = ({
    children,
    className,
    helperText,
    invalid,
    invalidText,
    legendId,
    legendText,
    readOnly,
    slug,
    warn,
    warnText,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `checkboxgroup`
            ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}

CheckboxGroup.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    helperText: propTypes.node,
    invalid: propTypes.bool,
    invalidText: propTypes.node,
    readOnly: propTypes.bool,
    slug: propTypes.node,
    warn: propTypes.bool,
    warnText: propTypes.node,
}

export default { CheckboxGroup };