import { Fragment } from "react";
import propTypes from "prop-types";

const Heading = ({
    children,
    className,
    ...props
}) => {
    return (
        <Fragment>
            <div className={className} {...props}>
                {children}
            </div>
        </Fragment>
    )
}

Heading.propTypes = {
    children: propTypes.node,
    className: propTypes.string
}

export default Heading;