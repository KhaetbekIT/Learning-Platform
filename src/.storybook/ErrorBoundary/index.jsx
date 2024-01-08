import classNames from "classnames";
import propTypes from "prop-types";
import { Fragment } from "react";

const ErrorBoundary = ({
    children,
    fallback,
    className,
    ...props
}) => {
    const classes = classNames([className,], "ErrorBoundary")

    return (
        <Fragment>
            <div className={classes}>
                {children}
            </div>
        </Fragment>
    )
}

ErrorBoundary.propTypes = {
    children: propTypes.node,
    fallback: propTypes.node,
    className: propTypes.string
}