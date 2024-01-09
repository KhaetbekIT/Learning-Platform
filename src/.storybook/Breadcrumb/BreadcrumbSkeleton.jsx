import { Fragment } from "react"
import propTypes from "prop-types"
import classNames from "classnames"

const BreadcrumbSkeleton = ([
    className,
    ...props
]) => {
    const
        classes = classNames([
            className,
            `media__${size}`,
            `bradcrumbskeleton`
        ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >

            </div>
        </Fragment>
    )
}

BreadcrumbSkeleton.propTypes = {
    className: propTypes.string,
}

export default { BreadcrumbSkeleton };