import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from "prop-types";

const ClassPrefix = ({
    children,
    prefix,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `classprefix`
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

ClassPrefix.propsTypes = {
    children: propsTypes.node,
    prefix: propsTypes.string,
}

export default ClassPrefix;