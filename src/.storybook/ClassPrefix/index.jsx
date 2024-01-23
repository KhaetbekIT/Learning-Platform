import classNames from "classnames"
import { Fragment } from "react"
import propTypes from "prop-types";

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

ClassPrefix.propTypes = {
    children: propTypes.node,
    prefix: propTypes.string,
}

export default ClassPrefix;