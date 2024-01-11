import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from "prop-types";

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

IdPrefix.propsTypes = {
    children: propsTypes.node,
    prefix: propsTypes.string,
}

export default IdPrefix;