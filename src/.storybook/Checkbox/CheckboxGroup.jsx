import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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

CheckboxGroup.propsTypes = {
    children: propsTypes.node,
    className: propsTypes.string,
    helperText: propsTypes.node,
    invalid: propsTypes.bool,
    invalidText: propsTypes.node,
    legendId: propsTypes.node,
    legendText: propsTypes.node,
    readOnly: propsTypes.bool,
    slug: propsTypes.node,
    warn: propsTypes.bool,
    warnText: propsTypes.node,
}

export default { CheckboxGroup };