import classNames from "classnames"
import { Fragment } from "react"
import propTypes from "prop-types";

const IdPrefix = ({
    children,
    prefix,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `IdPrefix`
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

IdPrefix.propTypes = {
    children: propTypes.node,
    prefix: propTypes.string,
}

export default IdPrefix;