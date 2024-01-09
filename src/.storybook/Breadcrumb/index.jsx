import classNames from "classnames"
import { Fragment } from "react"
import propTypes from "prop-types"

const Breadcrumb = ({
    arialabel,
    children,
    className,
    noTrailingSlash,
    ...props
}) => {
    const classes = classNames([className,
        `media__${size}`,
        `breadcrumb`])
    return (
        <Fragment>
            <div className={classes}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}

Breadcrumb.propTypes = {
    arialabel: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    noTrailingSlash: propTypes.bool,
}

export default Breadcrumb;