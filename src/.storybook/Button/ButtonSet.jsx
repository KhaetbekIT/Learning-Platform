import { Fragment } from "react"
import propTypes from 'prop-types'
import classNames from "classnames"


const ButtonSet = ({
    children,
    className,
    stacked,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `medid__${size}`,
                `buttonset`,
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

ButtonSet.protoTypes = {
    children: propTypes.node,
    className: propTypes.string,
    stacked: propTypes.bool,
}

export default { ButtonSet };