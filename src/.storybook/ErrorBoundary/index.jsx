import classNames from "classnames";
import propTypes from "prop-types";
import { Fragment, useState } from "react";

const ErrorBoundary = ({
    children,
    fallback,
    className,
    ...props
}) => {
    const classes = classNames([className], "ErrorBoundary");

    const [shouldThrowError, setShouldThrowError] = useState(false);

    function onClick() {
        setShouldThrowError(!shouldThrowError);
    }

    return (
        <Fragment>
            <button className={classes} onClick={onClick} {...props}>
                {children}
            </button>
            {shouldThrowError ? <p>Whoops</p> : <p>Successfully rendered</p>}
        </Fragment>
    );
};

ErrorBoundary.propTypes = {
    children: propTypes.node,
    fallback: propTypes.node,
    className: propTypes.string
};

export default ErrorBoundary;
